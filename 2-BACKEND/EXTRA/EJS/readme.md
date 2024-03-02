### Template Engines:-

```
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let siteName = "Adidas";
  let searchText = "Search Now";
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/blogpost/:slug", (req, res) => {
  let blogtitle = "Adidas why and when??";
  let blogContent = "It's a good brand";
  res.sendFile("templates/blogpost.html", { root: __dirname });
});
```

### Why Template Engines?

- We cant be able to send these variables like this
- because it is possible that we can made various blogpost now for each new blogpost we are not going to create a new blogpost.html
- so for this type of problem we use template engines like ejs,pug etc

### How to use ejs?

1. We have to create a file with [.ejs] like [index.ejs ] in which we need to use the variables made with the help of ejs
2. we use render method instead of send method
3. variable can be accessed by using :

> `<%= foo %>` ; where foo is variable name

- > https://github.com/mde/ejs/wiki/Using-EJS-with-Express
