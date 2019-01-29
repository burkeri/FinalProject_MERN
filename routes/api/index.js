// dependencies
const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const goalRoutes = require("./goal");

// user routes
// router.use("/user/register", userRoutes);

// goal routes
router.use("/goal", goalRoutes);

// send all requests to react app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
