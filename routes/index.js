// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { ensureAuthenticated } = require("../config/auth");
const userController = require("../controllers/userController");

// user -register
router.route("/user/register").post(userController.registerUser);

// user -login
router.post(
  '/user/login', 
  passport.authenticate('local'),
    function(req, res) { 
      res.redirect('/dashboard/' + req.user.username);
      console.log("logged in: " + req.user.username);
    });


// router.post(
//   "/user/login",
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/user/login",
//     failureMessage: console.log("failed")
//   })
// );

// user -logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
  console.log("logged out");
});

// dashboard
// router.get("/dashboard/", ensureAuthenticated, (req, res) => {
//   res.send(req.user.username);
//   console.log("dashboard: " + req.user.username);
  
// });

// API data routes
router.use("/api", apiRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
