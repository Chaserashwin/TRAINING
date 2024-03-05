var path = require("path");

let arr = [
  {
    Name: "Ashwin",
    Number: "100",
    Address: "india",
  },
];

module.exports.homepage = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
};

module.exports.success = (req, res) => {
  var NAME = req.body.newname;
  var NUMBER = req.body.newnumber;
  var ADDRESS = req.body.newaddress;
  //   res.sendFile(path.join(__dirname, "views", "form.html"));
};

module.exports.createinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
};

module.exports.readinfo = (req, res) => {
  res.send("hi");
};

module.exports.updateinfo = (req, res) => {
  arr.push({});
  res.sendFile(path.join(__dirname, "views", "login.html"));
};

module.exports.deleteinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
};
