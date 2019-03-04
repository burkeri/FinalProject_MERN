const router = require("express").Router();
const sessionRoutes = require("./session");

router.use("/", sessionRoutes);

module.exports = router;