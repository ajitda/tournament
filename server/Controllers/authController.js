const User = require("../Models/user");

const logInValidations = require("../Validator/logInValidations");

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
    const user = await User.findById(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
