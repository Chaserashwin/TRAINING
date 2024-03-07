var express = require("express");

var routes = require("./routes/userRoutes");

var app = express();

app.set("view engine", "ejs");

// var bodyParser = require("body-parser"); // depricated as already included in express
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if true read array and if false read string

app.use("/", routes); //to call all routes

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at http://localhost:${PORT}`);
});
