const User = require("../Models/user");

const logInValidations = require("../Validator/logInValidations");

// ---------------------------------------------------------------

exports.registerUser = async (req, res, next) => {
  try {
    const {displayName, email, password} = req.body;

    if (!email || !password || !displayName) {
      return res.status(422).send({error: 'All fields must be provided'});
    }

    User.findOne({email: email}, function (err, existingUser) {
      if (err) {
        return next(err);
      }

      if (existingUser) {
        return res.status(422).send({error: 'Email is already in use...'});
      }

      const user = new User({
        displayName: displayName,
        email: email,
        password: password
      });

      const token = user.getJwtToken();

      user.save(function (err) {
        if (err) {
          return next(err);
        }
        res.status(200).json({
          user,
          token,
        });
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---------------------------------------------------------------

exports.logInUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    const { isValid, errors } = await logInValidations(req.body, user);

    if (isValid > 0) {
      return res.status(400).json(errors);
    }

    const token = user.getJwtToken();

    res.status(200).json({
      user,
      token,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ---------------------------------------------------------------

exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req?.user?.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
