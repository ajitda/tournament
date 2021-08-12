const express = require('express');
const {
    authUser,
    registerUser,
    updateUserProfile
} = require("../controllers/userController.js");
// const authUser = require('../controllers/userController')
const { protect } =  require("../middleware/authMiddleware.js");
const router = express.Router();
console.log(`authUser`);

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;