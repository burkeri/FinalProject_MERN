// dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
const { ensureAuthenticated } = require("../config/auth");
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
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
  console.log('logged out');
});

// dashboard
router.get("/user/dashboard", ensureAuthenticated, (req, res) => {
  res.send(req.user.username);
});
  

// API data routes
router.use("/api", apiRoutes);

// send all requests to react app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;