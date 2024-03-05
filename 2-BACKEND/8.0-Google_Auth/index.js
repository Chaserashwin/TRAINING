require("dotenv").config();
var express = require("express");
var session = require("express-session");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

var app = express();

// for accessing Middlewares:-
// for session
app.use(
  session({
    secret: "GoogleOAuth123",
    resave: false,
    saveUninitialized: false,
  })
);
// for passport
app.use(passport.initialize());
// for passport session
app.use(passport.session());

// for using template engine
app.set("view engine", "ejs");

GOOGLE_CLIENT_ID = process.env.CLIENT_ID;
const GOOGLE_CLIENT_SECRET_KEY = process.env.CLIENT_SECRET_KEY;
const REDIRECT_URI = process.env.REDIRECT_URI;

var userprofile; //for taking from profile that helps in displaying the profile after auth

// default route
app.get("/", (req, res) => {
  res.render("login");
});

//success route
app.get("/success", (req, res) => {
  res.render("profile");
});

//error route
app.get("/error", (req, res) => {
  res.send(err);
});

// authorization with passport
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET_KEY,
      callbackURL: REDIRECT_URI,
    },
    function (accessToken, RefreshToken, profile, done) {
      userprofile = profile;
      return done(null, profile); // no error give me profile from google email
    }
  )
);

// when login button is clicked
app.get("/auth/google", passport.authenticate("google", { scope: ["email"] }));

// after google authenticate is done
app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  (req, res) => {
    res.redirect("/success"); // redirect to success route
  }
);

// to store information in session
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

// to retrieve info from passport session
passport.deserializeUser(function (user, cb) {
  cb(null, user);
});

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at ${process.env.PORT}`);
});
