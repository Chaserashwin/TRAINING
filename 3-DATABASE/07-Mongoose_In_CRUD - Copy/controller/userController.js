// require("../model/userModel");
const mongoose = require("mongoose");

// var User = mongoose.model("user");
var User = require("../model/userModel");
var registerUser = require("../model/newUserModel");

module.exports.registerNewUser = (req, res) => {
  var newregister = new registerUser({
    name: req.body.uname,
    email: req.body.uemail,
    password: req.body.upass,
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
