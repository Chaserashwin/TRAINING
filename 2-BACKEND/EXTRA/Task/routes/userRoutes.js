var express = require("express");
var userRoutes = express.Router();

var userCtrl = require("../controllers/userController");
var uploadCtrl = require("../controllers/uploadController");

userRoutes.get("/", userCtrl.homepage);

userRoutes.get("/addPost", userCtrl.addPost);

userRoutes.post(
  "/successaddPost",
  uploadCtrl.successimageupload,
  userCtrl.successaddPost
);

userRoutes.get("/searchPost", userCtrl.searchPost);

userRoutes.get("/successsearchPost", userCtrl.successsearchPost);

module.exports = userRoutes;
