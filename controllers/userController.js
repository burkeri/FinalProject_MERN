// dependencies
const bcrypt = require("bcryptjs");
const passport = require("passport");

// models
const User = require("../models/User");

module.exports = {

  // register/create new user ------
  registerUser: function(req, res) {
    let { name, username, email, password, password2, dob } = req.body;
    let formErrors = [""];
    let registered = [""];
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // all required fields
    if (!name || !username || !email || !password || !password2 || !dob) {
      formErrors.push({ msg: "Please complete all fields." });
    }

    // name longer than 2 characters
    if (name.length <= 2) {
      formErrors.push({ msg: "Name must be longer than 2 characters." });
    }

    // username longer than 2 characters
    if (username.length <= 2) {
      formErrors.push({ msg: "Username must be longer than 2 characters." });
    }

    // email validation
    if (!validEmail.test(email)) {
      formErrors.push({ msg: "Please enter a valid email address." });
    }

    // password length and matching password
    if (password.length <= 6) {
      formErrors.push({ msg: "Password must be longer than 6 characters." });
    } else if (password !== password2) {
      formErrors.push({ msg: "Passwords must match." });
    }

    // email account already taken
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          console.log("\nexisting:");
          console.log(user);
          formErrors.push({ msg: "This email address is already in use." });
        }
      })
      .then(() => {
        if (formErrors.length > 1) {
          res.send(formErrors);
        }
      });

    // username already takes
    User.findOne({ username: username })
      .then(user => {
        if (user) {
          console.log("\nexisting:");
          console.log(user);
          formErrors.push({ msg: "This username is already in use." });
        }
      })
      .then(() => {
        if (formErrors.length > 1) {
          res.send(formErrors);
        }
      });

    if (formErrors.length === 1) {
      const newUser = new User({
        name,
        email,
        username,
        password,
        dob
      });
      // hash password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              registered.push({ msg: "You are now registered! Please login." });
              res.send(registered);
            })
            .catch(err => console.log(err));
        })
      );
    }
  },

  // handle login ------
  handleLogin: function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      let loginErrors = [];
      if (err) {
        return next(err);
      }
      if (!user) {
        loginErrors.push(info.message);
        res.redirect("/");
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect("/dashboard");
      });
    })(req, res, next);
  },

  // handle logout ------
  handleLogout: function(req, res,) {
    console.log("TEST");
  }

};
