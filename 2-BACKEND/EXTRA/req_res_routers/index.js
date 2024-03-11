const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("its a get request");
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log("its a post request");
  res.send("hello world post");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
