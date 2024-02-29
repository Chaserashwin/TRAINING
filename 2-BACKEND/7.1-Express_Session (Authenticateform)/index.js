var express = require("express");
var session = require("express-session");

var path = require("path");

var app = express();

var NEWUSER;
var NEWPASS;
app.use(express.urlencoded({ extended: true })); //for body parser

//for middleware
app.use(
  session({
    secret: "ABC1125!",
    resave: false, //if we don't want to save every repeated session
    saveUninitialized: true,
  })
);

app.users = [];

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count++;
    res.send(`No. of visit is ${req.session.count}`);
  } else {
    req.session.count = 1;
    res.send(`Welcome for the first time visit: ${req.session.count}`);
  }
});

//-----------------------------------------------------------------------//
app.get("/signupform", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "signupform.html"));
  NEWUSER = req.body.newname;
  NEWPASS = req.body.newpass;
});

app.get("/loginform", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "loginform.html"));
});

app.post("/login", (req, res) => {
  var uname = req.body.username; // username wala data udhaya gya hai
  req.session.user = uname; // session variable user
  var upass = req.body.userpass;
  req.session.pass = upass;
  console.log(req.session.user);
  res.redirect("/check");
});

//! for authentication
app.get("/check", (req, res) => {
  if (req.session.user === NEWUSER && req.session.pass === NEWPASS) {
    res.send("Successfull Entered");
    res.redirect("/profile");
  } else {
    res.send("Wrong Credentials!!");
  }
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user} <br> <a href="/logout">Logout</a>`);
  } else {
    res.redirect("/loginform"); //!if the session is not currently active
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/loginform");
});

app.listen(2000, (err) => {
  if (err) console.log(err);
  else console.log("server is running at localhost:2000");
});
