const express = require("express");

var userRoutes = express.Router();
var userCtrl = require("../controller/userController");
var verifyjwt = require("../config/jwtVerify");

userRoutes.post("/register", userCtrl.registerNewUser);
userRoutes.post("/login", userCtrl.loginUser);
userRoutes.get("/myprofile", verifyjwt.verifyToken, userCtrl.profile);

module.exports = userRoutes;
