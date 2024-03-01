var express = require("express");
var session = require("express-session");
var upload = require("./uploadmodule");

var app = express();

app.use(express.urlencoded({ extended: true })); //for body parser

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("test");
});

app.get("/getdata", (req, res) => {
  var name = "ashwin";
  // res.send(`hi ${name}`);
  res.render("data", { uname: name });
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server is running at localhost:3000");
});
