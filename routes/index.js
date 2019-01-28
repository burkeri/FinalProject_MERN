// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userController = require("../controllers/userController");

// user -register
router.route("/user/register")
    .post(userController.registerUser);

// API data routes
router.use("/api", apiRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;