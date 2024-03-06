require("dotenv").config();
const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const app = express();

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

const mailOptions = {
  from: `"Ashwin jaiswal" jaiswalashwin398@gmail.com`,
  to: "2002829.it.cec@cgc.edu.in",
  subject: "HELLO user!!",
  text: "Hello 2002829, I am ashwin jaiswal how are you",
  html: "<h2>I am Ashwin</h2> ",
  attachment: path.join(__dirname, "addictions.png"),
};

transporter.sendMail(mailOptions, (err, info) => {
  console.log(info);
});

app.get("/", (req, res) => {
  res.send("Mail Sent");
});

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at ${process.env.PORT}`);
});
