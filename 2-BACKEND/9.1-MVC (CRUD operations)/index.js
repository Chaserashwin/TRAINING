var express = require("express");

var routes = require("./routes/userRoutes");

var app = express();

// var bodyParser = require("body-parser"); // depricated as already included in express
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // if true read array and if false read string

app.use("/", routes);

app.listen(2000, (err) => {
  if (err) console.log(err);
  else console.log(`server is running at 2000`);
});
