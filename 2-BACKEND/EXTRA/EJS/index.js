const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   let siteName = "Adidas";
//   let searchText = "Search Now";
//   res.sendFile("templates/index.html", { root: __dirname });
// });

// app.get("/blogpost/:slug", (req, res) => {
//   let blogtitle = "Adidas why and when??";
//   let blogContent = "It's a good brand";
//   res.sendFile("templates/blogpost.html", { root: __dirname });
// });
// We cant be able to send these variables like this
// because it is possible that we can made various blogpost now for each new blogpost we are not going to create a new blogpost.html
// so for this type of problem we use template engines like ejs,pug etc

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  let arr = ["hey", 34, "bacho", 74];
  res.render("index", {
    siteName: siteName,
    searchText: searchText,
    arr,
  });
});

app.get("/blogpost/:slug", (req, res) => {
  let blogTitle = "Adidas why and when??";
  let blogContent = "It's a good brand";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
