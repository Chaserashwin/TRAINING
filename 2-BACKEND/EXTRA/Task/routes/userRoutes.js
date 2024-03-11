var express = require("express");
var userRoutes = express.Router();

var userCtrl = require("../controllers/userController");

userRoutes.get("/", userCtrl.homepage);

userRoutes.get("/addPost", userCtrl.addPost);

userRoutes.post("/successaddPost", userCtrl.successaddPost);

userRoutes.get("/searchPost", userCtrl.searchPost);

userRoutes.get("/successsearchPost", userCtrl.successsearchPost);

module.exports = userRoutes;
