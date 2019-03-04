// dependencies
const router = require("express").Router();
const sessionController = require("../../controllers/sessionController");

// TEST
router.route("/dashboard").get(sessionController.currentUser);

module.exports = router;