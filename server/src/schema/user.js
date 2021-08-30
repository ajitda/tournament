import {authMiddleware} from '../middlewares/auth.js'
import { UserTC, UserITC } from '../models/user.js';

const UserQuery = {
  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),
  userPagination: UserTC.getResolver('pagination'),
  userLogin: UserTC.getResolver('userLogin'),
  userDiscordMutation: UserTC.getResolver('userDiscordMutation'),
  userRegister: UserTC.getResolver('userLogin'),
  authUser: UserTC.getResolver('authUser').withMiddlewares([authMiddleware]),
};

const UserMutation = {
  userCreateOne: UserITC.getResolver('createOne'),
  userCreateMany: UserITC.getResolver('createMany'),
  userUpdateById: UserITC.getResolver('updateById'),
  userUpdateOne: UserITC.getResolver('updateOne'),
  userUpdateMany: UserITC.getResolver('updateMany'),
  userRemoveById: UserITC.getResolver('removeById'),
  userRemoveOne: UserITC.getResolver('removeOne'),
  userRemoveMany: UserITC.getResolver('removeMany'),
};

export { UserQuery, UserMutation };