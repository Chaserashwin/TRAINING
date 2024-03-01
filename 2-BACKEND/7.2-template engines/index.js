var express = require("express");
var session = require("express-session");
var upload = require("./uploadmodule");
var path = require("path");
var multer = require("multer");
// upload = multer('{ dest: 'uploads/' }')
var app = express();

app.use(express.urlencoded({ extended: true })); //for body parser

app.set("view engine", "ejs");

// //for middleware
// app.use(
//   session({
//     secret: "ABC1125!",
//     resave: false, //if we don't want to save every repeated session
//     saveUninitialized: true,
//   })
// );

// let arr = [
//   {
//     username: "default",
//     password: "12345",
//   },
// ];

// app.get("/", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//     res.send(`No. of visit is ${req.session.count}`);
//   } else {
//     req.session.count = 1;
//     res.send(`Welcome for the first time visit: ${req.session.count}`);
//   }
// });

// //-----------------------------------------------------------------------//
// //route to get to the signup form
// app.get("/signupform", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "signupform.html"));
// });

// //route which stores the information entered in the signup form
// app.post("/storeinfo", (req, res) => {
//   username = req.body.newname;
//   // console.log(NEWUSER);
//   password = req.body.newpass;
//   // console.log(NEWPASS);
//   arr.push({ username, password });
//   console.log(arr);
//   res.redirect("/loginform");
// });

// // route which get to the login form
// app.get("/loginform", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "loginform.html"));
// });

// // route which is used to check the entered data with the already existing data
// app.post("/login", (req, res) => {
//   let uname = req.body.username; // username wala data udhaya gya hai
//   // console.log(uname);
//   let upass = req.body.userpass;
//   // console.log(upass);
//   if (arr.find((ele) => ele.username == uname && ele.password == upass)) {
//     req.session.user = uname; // session variable user
//     req.session.pass = upass;
//     res.redirect("/profile");
//   } else {
//     res.send(
//       `Wrong credentials <br> <a href="/Signup">Signup</a><br> <a href="/login">Login</a>`
//     );
//   }
// });

// // route to open page if authenticate successfull and session is created
// app.get("/profile", (req, res) => {
//   if (req.session.user) {
//     console.log(arr);
//     res.send(`Welcome ${req.session.user} <br> <a href="/logout">Logout</a>`);
//   } else {
//     res.redirect("/loginform"); //!if the session is not currently active
//   }
// });

// // when logout button is pressed the session is destroyed
// app.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.redirect("/loginform");
// });

// app.get("/openfile", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "formupload.html"));
// });

// app.post("/getfile", upload.single("imageupload"), (req, res) => {
//   res.send("file uploaded successfully");
// });

// app.post("/getfiles", upload.array("imageupload", 5), (req, res) => {
//   res.send("file uploaded successfully");
// });

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

//  for authentication
// app.get("/check", (req, res) => {
//   if (req.session.user === NEWUSER && req.session.pass === NEWPASS) {
//     res.send("Successfull Entered");
//     res.redirect("/profile");
//   } else {
//     res.send("Wrong Credentials!!");
//   }
// });
