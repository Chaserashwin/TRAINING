var path = require("path");

let arr = [
  {
    Name: "Ashwin",
    RollNumber: "2002829",
    Stream: "IT",
  },
];

module.exports.homepage = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
};

module.exports.success = (req, res) => {
  var NAME = req.body.newname;
  var ROLLNUMBER = req.body.newrollnumber;
  var STREAM = req.body.newstream;
  arr.push({ NAME, ROLLNUMBER, STREAM });
  console.log(arr);
  res.redirect("/");
  //   res.sendFile(path.join(__dirname, "views", "form.html"));
};

module.exports.createinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "createform.html"));
};

module.exports.readinfo = (req, res) => {
  res.send(arr);
};

module.exports.updateinfo = (req, res) => {
  arr.push({});
  res.sendFile(path.join(__dirname, "views", "login.html"));
};

module.exports.deleteinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
};
