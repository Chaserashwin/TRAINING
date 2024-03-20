const express = require("express");

var userRoutes = express.Router();
var userCtrl = require("../controller/userController");

userRoutes.post("/register", userCtrl.registerNewUser);
userRoutes.post("/login", userCtrl.loginUser);

module.exports = userRoutes;
