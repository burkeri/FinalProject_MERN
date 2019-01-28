// dependencies
const path = require("path");
const router = require("express").Router();
const passport = require("passport");
const local = require("passport-local");
const userController = require("../controllers/userController");

// user -register
router.route("/user/register")
  .post(userController.registerUser);

// user -login
router.post("/user/login", (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/user/dashboard",
      successMessage: console.log("success"),
      failureRedirect: "/user/login",
      failWithError: console.log("failed")
    })(req, res, next);
  });

// user -logout
router.get('/user/logout', (req, res) => {
  req.logout();
  res.redirect('/user/login');
  console.log('logged out');
});

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;