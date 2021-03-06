const  asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");
const { sendResponse, sendError } = require("../utils/utils.js");

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    sendResponse(res, {
      user: user,
      token: generateToken(user._id),
    });
  } else {
    sendError(res, {message: "Invalid Email or Password"});
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    // pic,
  });

  if (user) {
    sendResponse(res, {
      user: user,
      token: generateToken(user._id),
    });
  } else {
    sendError(res, {message: "User not found!"});
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    // user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    sendResponse(res, {user: updatedUser, token: generateToken(updatedUser._id)});
    
  } else {
    sendError(res, {message: "User not found!"})
  }
});

const showUser = asyncHandler(async (req, res) =>{
  const user = req.user;
  if (user) sendResponse(res, {user: user, token: generateToken(user._id)});
  else sendError(res, {message: "User not found!"});
});

module.exports = { authUser, updateUserProfile, registerUser, showUser };
// module.exports = authUser;

