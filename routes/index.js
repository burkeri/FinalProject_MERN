// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");

// API data routes
router.use("/api", apiRoutes);

// user routes
router.use("/", userRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
