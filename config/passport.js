// dependencies
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// models
const User = require("../models/User");

module.exports = function(passport) {

  passport.use(
    new LocalStrategy(function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, { message: 'Username is incorrect.' });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password is incorrect.' });
          }
        });
      });
    })
  );

  // original ------

  // passport.serializeUser((user, done) => {
  //   done(null, user.id);
  // });

  // passport.deserializeUser((id, done) => {
  //   User.findById(id, function(err, user) {
  //     done(err, user);
  //   });
  // });

  // return full user instead of just id
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

};
