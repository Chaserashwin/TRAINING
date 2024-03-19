// require("../model/userModel");
const mongoose = require("mongoose");

// var User = mongoose.model("user");
var User = require("../model/userModel");

module.exports.adduser = (req, res) => {
  var newUser = new User({
    name: req.body.uname,
    email: req.body.uemail,
    contact: req.body.ucontact,
  });

  newUser
    .save() // it is equivalent to insertOne() and insertMany()
    .then((data) => {
      return res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: "error in inserting a new user",
        error: err.message,
      });
    });
};
