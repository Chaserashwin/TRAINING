// require("../model/userModel");
const mongoose = require("mongoose");

// var User = mongoose.model("user");
var User = require("../model/userModel");

//* CREATING
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

//* READING ALL DATA
module.exports.viewRecords = (req, res) => {
  User.find()
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

//* READING
module.exports.searchById = (req, res) => {
  userId = req.params.id;
  return User.findById({ _id: userId })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in inserting a new user",
        error: err.message,
      });
    });
};

module.exports.searchByName = (req, res) => {
  userName = req.params.name;
  return User.findOne({ name: userName })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in inserting a new user",
        error: err.message,
      });
    });
};

//* UPDATING
module.exports.updateById = (req, res) => {
  userId = req.params.id;
  return User.findByIdAndUpdate(userId, {
    name: "nikhil",
  })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in updating user",
        error: err.message,
      });
    });
};

module.exports.updateByName = (req, res) => {
  userName = req.params.name;
  return User.findOneAndUpdate({ name: userName }, { name: "nikhil" })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in updating user",
        error: err.message,
      });
    });
};

//* DELETING
module.exports.deleteById = (req, res) => {
  userId = req.params.id;
  return User.findByIdAndDelete(userId)
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in deleting a new user",
        error: err.message,
      });
    });
};

module.exports.deleteByName = (req, res) => {
  userName = req.params.name;
  return User.findOneAndDelete({ name: userName })
    .then((data) => {
      res.status(200).json({
        success: true,
        user: data,
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "error in deleting a new user",
        error: err.message,
      });
    });
};
