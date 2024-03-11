var express = require("express");
var userRoutes = express.Router();

var userCtrl = require("../controller/userController");

userRoutes.get("/", userCtrl.homepage);

// for create route
userRoutes.get("/createform", userCtrl.createinfo);

// for create success route
userRoutes.post("/success", userCtrl.successcreate);

// for read route
userRoutes.get("/readform", userCtrl.readinfo);

// for update route
userRoutes.get("/updateform", userCtrl.updateinfo);

// for update success route
userRoutes.get("/updateform", userCtrl.successupdate);

// for delete route
userRoutes.get("/deleteform", userCtrl.deleteinfo);

module.exports = userRoutes;
