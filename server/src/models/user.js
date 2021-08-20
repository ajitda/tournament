import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import bcrypt  from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
}

export const User = mongoose.model('User', UserSchema);
export const UserTC = composeWithMongoose(User);

// TODO: In-progress
UserTC.addResolver({
  kind: 'query',
  name: 'userLogin',
  args: {
    identity: 'String!', // For multi-purpose usage as email and username
    password: 'String!',
  },
  type: UserTC.getResolver('findById').getType(),
  resolve: async({args, context}) => {
    let user = null;
    if(isNaN(Number(args.identity))){
      user = await User.findOne({ email: args.identity });
    // } else {
      // user = await User.findOne({ username: args.identity });
    }

    if(!user) {
      throw new Error('User does not exist.')
    }
    console.log(user);
    const isEqual = await bcrypt.compareSync(args.password, user.password);
    if(!isEqual) {
      throw new Error('Password is not correct.');
    }
    const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
    console.log(UserTC.getResolver('findById'));
    return {
      user
    }
  }
})