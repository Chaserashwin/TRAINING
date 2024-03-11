const express = require("express");

const routes = require("./routes/userRoutes");

var app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if true read array and if false read string

app.use("/", routes); //to call all routes

const PORT = 2000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at http://localhost:${PORT}`);
});
