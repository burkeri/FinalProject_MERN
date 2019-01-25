// dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController");

// register handle
router.route("/user/register")
    .post(userController.registerUser);

module.exports = router;