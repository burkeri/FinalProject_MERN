// dependencies
const router = require("express").Router();
const passport = require("passport");
const userController = require("../../controllers/userController");

// user - register
router.route("/regsiter").post(userController.registerUser);

// user - login
router.post("/login", 
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/user/login"
    }));

// user - logout
router.route("/logout").post(userController.handleLogout);

// dashboard
// router.get("/dashboard/", ensureAuthenticated, (req, res) => {
//   res.send(req.user.username);
//   console.log("dashboard: " + req.user.username);
// });

module.exports = router;