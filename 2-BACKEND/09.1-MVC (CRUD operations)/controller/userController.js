var path = require("path");

let arr = [
  {
    Name: "",
    RollNumber: "",
    Stream: "",
  },
];

module.exports.homepage = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
};

module.exports.createinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "createform.html"));
};

module.exports.success = (req, res) => {
  // console.log(req);
  var NAME = req.body.newname;
  var ROLLNUMBER = req.body.newrollnumber;
  var STREAM = req.body.newstream;
  console.log(NAME, ROLLNUMBER, STREAM);
  arr.push({ Name: NAME, RollNumber: ROLLNUMBER, Stream: STREAM });
  console.log(arr);
  res.send("Successfully Added");
  // res.redirect("/");
  //   res.sendFile(path.join(__dirname, "views", "form.html"));
};

module.exports.readinfo = (req, res) => {
  res.render("display", { data: arr });
};

module.exports.updateinfo = (req, res) => {
  arr.push({});
  res.sendFile(path.join(__dirname, "views", "login.html"));
};

module.exports.deleteinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
};
