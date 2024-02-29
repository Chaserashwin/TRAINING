var express = require("express");
var session = require("express-session");
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true })); //for body parser

//for middleware
app.use(
  session({
    secret: "ABC1125!",
    resave: false, //if we don't want to save every repeated session
    saveUninitialized: true,
  })
);

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
app.get("/login", (req, res) => {
  console.log("I AM LOGIN");
  res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.post("/loginuser", (req, res) => {
  console.log("I AM LOGINUSER");
  var uname = req.body.username; // username wala data udhaya gya hai
  req.session.user = uname; // session variable user
  console.log(req.session.user);
  res.redirect("/profile");
});

app.get("/profile", (req, res) => {
  console.log("I AM PROFILE");
  if (req.session.user) {
    res.send(`Welcome ${req.session.user} <br> <a href="/logout">Logout</a>`);
  } else {
    res.redirect("/login"); //!if the session is not currently active
  }
});

app.get("/logout", (req, res) => {
  console.log("I AM LOGOUT");
  req.session.destroy();
  res.redirect("/login");
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server is running at localhost:3000");
});
