const express = require("express");

var userRoutes = express.Router();
var userCtrl = require("../controller/userController");

userRoutes.post("/newUser", userCtrl.adduser);

module.exports = userRoutes;
