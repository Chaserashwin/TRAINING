var express = require("express");
var userRoutes = express.Router(); // instead of app as in that case it is declared globally

var userCtrl = require("../controller/usercontroller");

// for default route
userRoutes.get("/", userCtrl.homepage);
// for login route
userRoutes.get("/login", userCtrl.login);

module.exports = userRoutes;
