var path = require("path");

module.exports.homepage = (req, res) => {
  res.send("hello");
};

module.exports.login = (req, res) => {
  res.sendFile(path.join(__dirname, "views", "login.html"));
};
