// dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController");

// user - register
router.route("/regsiter").post(userController.registerUser);

// user - login
router.route("/login").post(userController.handleLogin);

// TEST
router.route("/").get(() => {console.log("test")});

module.exports = router;
