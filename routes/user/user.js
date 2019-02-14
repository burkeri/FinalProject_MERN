// dependencies
const router = require("express").Router();
const userController = require("../../controllers/userController");

// user - register
router.route("/regsiter").post(userController.registerUser);

// user - login
router.route("/login").post(userController.handleLogin);

// // user - login validation
// router.route

// user - logout
// router.use("/logout").getuserController.handleLogout);

// dashboard
// router.get("/dashboard/", ensureAuthenticated, (req, res) => {
//   res.send(req.user.username);
//   console.log("dashboard: " + req.user.username);
// });

module.exports = router;
