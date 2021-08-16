const jwt = require("jsonwebtoken");

const User = require("../Models/user");

// Check it the user is authenticated or not
exports.auth = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token || token === "null") {
    return res
      .status(401)
      .json({ message: "Login first to access the resource." });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
};
