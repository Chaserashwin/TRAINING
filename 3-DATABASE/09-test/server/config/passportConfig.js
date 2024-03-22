var passport = require("passport");
var passportlocal = require("passport-local").Strategy;

// for importing model
var registerUser = require("../model/newUserModel");

var bcrypt = require("bcrypt");

passport.use(
  new passportlocal({ usernameField: "email" }, (useremail, password, done) => {
    registerUser
      .findOne({ email: useremail })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(password, user.password) == false) {
            //if password doesnot match
            return done(null, false, { message: "password does not matched" });
          }
          return done(null, user);
        } else {
          return done(null, false, { message: "user not found" });
        }
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
