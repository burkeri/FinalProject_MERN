// dependencies
const path = require("path");
const router = require("express").Router();
const goalRoutes = require("./goal");
const postRoutes = require("./post");

// api/goal routes
router.use("/goal", goalRoutes);
// api/post routes
router.use("/post", postRoutes);

// send all requests to react app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
