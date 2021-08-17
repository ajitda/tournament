const express = require("express");
const passport = require('passport');
const authController = require("../Controllers/authController");

// Verify if user need to be authenticated for this request
const requireAuth = passport.authenticate('jwt', {
  session: false
});

const router = express.Router();
router.post("/log-in", authController.logInUser);
router.post("/register", authController.registerUser);

router.get("/me", requireAuth, authController.getCurrentUser);

module.exports = router;
