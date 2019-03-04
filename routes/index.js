// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const sessionRoutes = require("./session");

// API data routes
router.use("/api", apiRoutes);

// user routes
router.use("/", userRoutes);

// session routes
router.use("/", sessionRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
