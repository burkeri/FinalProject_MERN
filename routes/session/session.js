// dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController");

// TEST
router.route("/dashboard").get(userController.currentUser);

module.exports = router;