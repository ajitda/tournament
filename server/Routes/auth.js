const express = require("express");
const router = express.Router();

const authController = require("../Controllers/authController");

const { auth } = require("../Middlewares/auth");

router.post("/log-in", authController.logInUser);

router.get("/me", auth, authController.getCurrentUser);

module.exports = router;
