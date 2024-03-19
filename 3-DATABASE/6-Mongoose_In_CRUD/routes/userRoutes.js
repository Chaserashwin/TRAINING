const express = require("express");

var userRoutes = express.Router();
var userCtrl = require("../controller/userController");

// create route
userRoutes.post("/newUser", userCtrl.adduser);

// read all data route
userRoutes.get("/allData", userCtrl.viewRecords);

// read routes
userRoutes.get("/searchById/:id", userCtrl.searchById);
userRoutes.get("/searchByName/:name", userCtrl.searchByName);

// update routes
userRoutes.get("/updateById/:id", userCtrl.updateById);
userRoutes.get("/updateByName/:name", userCtrl.updateByName); //!not work

// delete routes
userRoutes.get("/deleteById/:id", userCtrl.deleteById);
userRoutes.get("/deleteByName/:name", userCtrl.deleteByName); //!not work

module.exports = userRoutes;
