var upload = require("../uploadmodule");

var id = 0;
var arr = [];
var result = [];
module.exports.homepage = (req, res) => {
  res.render("homepage", { data: arr });
};

module.exports.addPost = (req, res) => {
  res.render("addPost");
};

// module.exports.successimageupload = upload.single("imageupload");

module.exports.successaddPost = (req, res) => {
  console.log(req);
  id++;
  var title = req.body.title;
  var content = req.body.content;
  // var image = req.file.path;
  var post = {
    id: id,
    title: title,
    content: content,
    // image: image,
  };
  arr.push(post);
  console.log(arr);
  res.render("homepage", { data: arr });
};

module.exports.searchPost = (req, res) => {
  res.render("searchPost", { result: result });
};

module.exports.successsearchPost = (req, res) => {
  result = arr.filter((ele) => ele.title == req.query.searchtitle);
  console.log(result);
  res.render("searchPost", { result: result });
};
