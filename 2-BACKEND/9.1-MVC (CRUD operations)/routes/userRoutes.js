var express = require("express");
var userRoutes = express.Router();

var userCtrl = require("../controller/userController");

userRoutes.get("/", userCtrl.homepage);

// for create route
userRoutes.get("/createform", userCtrl.createinfo);
// for read route
userRoutes.get("/readform", userCtrl.readinfo);
// for update route
userRoutes.get("/updateform", userCtrl.updateinfo);
// for delete route
userRoutes.get("/deleteform", userCtrl.deleteinfo);

userRoutes.get("/success", userCtrl.success);

module.exports = userRoutes;
