const express = require('express');
const {
    authUser,
    registerUser,
    updateUserProfile,
    showUser
} = require("../controllers/userController.js");
// const authUser = require('../controllers/userController')
const { protect } =  require("../middleware/authMiddleware.js");
const router = express.Router();
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route('/profile/:id').get(protect, showUser);
module.exports = router;