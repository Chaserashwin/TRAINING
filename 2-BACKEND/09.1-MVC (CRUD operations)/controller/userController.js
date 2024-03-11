var path = require("path");

var ID = 0;

let arr = [
  {
    id: "",
    name: "",
    rnumber: "",
    stream: "",
  },
];

module.exports.homepage = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "homepage.html"));
  // res.render("homepage");
};

module.exports.createinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "createform.html"));
  // res.render("createform");
};

module.exports.successcreate = (req, res) => {
  ID++;
  var NAME = req.body.newname;
  var ROLLNUMBER = req.body.newrollnumber;
  var STREAM = req.body.newstream;
  console.log(ID, NAME, ROLLNUMBER, STREAM);
  arr.push({ id: ID, name: NAME, rnumber: ROLLNUMBER, stream: STREAM });
  console.log(arr);
  res.send(`Successfully Added <button><a href="/">HomePage</a></button>`);
  // res.redirect("/");
  //   res.sendFile(path.join(__dirname, "views", "form.html"));
};

module.exports.readinfo = (req, res) => {
  res.render("display", { data: arr });
};


module.exports.updateinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
  arr.push({});
};

module.exports.successupdate = (req, res) => {
  ID++;
  var NAME = req.body.newname;
  var ROLLNUMBER = req.body.newrollnumber;
  var STREAM = req.body.newstream;
  console.log(ID, NAME, ROLLNUMBER, STREAM);
  arr.push({ id: ID, name: NAME, rnumber: ROLLNUMBER, stream: STREAM });
  console.log(arr);
  res.send(`Successfully Added <button><a href="/">HomePage</a></button>`);
  // res.redirect("/");
  //   res.sendFile(path.join(__dirname, "views", "form.html"));
};
module.exports.deleteinfo = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
};
