// require("../model/userModel");
require("../config/passportConfig");
const mongoose = require("mongoose");
var passport = require("passport");
var jwt = require("jsonwebtoken");

// var User = mongoose.model("user");
// var User = require("../model/userModel");
var registerUser = require("../model/newUserModel");

module.exports.registerNewUser = (req, res) => {
  var newregister = new registerUser({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  newregister
    .save()
    .then((data) => {
      return res.status(200).json({
        success: true,
        userDetails: data,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        err: err,
      });
    });
};

//login method
module.exports.loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(404).json(err);
    // if (user) return res.status(200).json(user);
    //* In case of token
    if (user)
      return res.status(200).json({
        //payload
        token: jwt.sign(
          { id: user._id, username: user.name },
          "tokenSecret!!",
          {
            expiresIn: "3m",
          }
        ),
      });
    if (info) return res.status(404).json(info);
  })(req, res, next);
};

module.exports.profile = (req, res) => {
  res.status(200).json({ msg: "Hi man" });
};
