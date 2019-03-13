// dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController");

// user - register
router.route("/register").post(userController.registerUser);

// user - login
router.route("/login").post(userController.handleLogin);

module.exports = router;
