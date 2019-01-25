// dependencies
const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");

// user routes
router.use("/user/register", userRoutes);

// send all requests to react app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;
