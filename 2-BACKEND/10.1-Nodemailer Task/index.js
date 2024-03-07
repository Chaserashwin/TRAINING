require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();

var upload = require("./uploadmodule");

app.use(express.urlencoded({ extended: true })); //for body parser

//nodemailer module
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // for security true http's'
  auth: {
    user: "jaiswalashwin398@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.redirect("/openform");
});

app.get("/openform", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "formupload.html"));
});

app.post("/getfile", upload.single("imageupload"), (req, res) => {
  console.log(req.file);
  var TO = req.body.email;
  var SUBJECT = req.body.subject;
  var MESSAGE = req.body.message;

  // setting up message options
  const mailOptions = {
    from: `"Ashwin jaiswal" jaiswalashwin398@gmail.com`,
    to: TO,
    subject: SUBJECT,
    text: MESSAGE,
    attachments: [{ path: req.file.path }],
    //   html: "<h2>I am Ashwin</h2> ",
  };

  //Deliver the message object using the sendMail() method of your previously created transporter
  transporter.sendMail(mailOptions, (err, info) => {
    console.log(info);
  });
  res.send("Mail Sent Successfully");
});

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at ${process.env.PORT}`);
});
