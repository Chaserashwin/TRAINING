var passport = require("passport");
var passportlocal = require("passport-local").Strategy;

// for importing model
var registerUser = require("../model/newUserModel");

passport.use(
  new passportlocal({ usernameField: "email" }, (useremail, password, done) => {
    registerUser
      .findOne({ email: useremail })
      .then((user) => {
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);

// to store into the session
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// to retrive the info into the session
passport.deserializeUser(function (user, cb) {
  cb(null, user);
});
