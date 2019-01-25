// dependencies
const path = require("path");
const router = require("express").Router();
const userController = require("../controllers/userController");

// user -register
router.route("/user/register")
    .post(userController.registerUser);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;