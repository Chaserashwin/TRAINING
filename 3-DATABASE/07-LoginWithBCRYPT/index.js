require("./config/db"); // for getting access to the database

const express = require("express");
const app = express();
const port = 2000;

var routes = require("./routes/userRoutes");

//accessing the files before running routes
app.use(express.urlencoded({ extended: true })); // if we get a text array
app.use(express.json()); // if we get json file

// for running routes
app.use("/", routes);

app.listen(port, (res) => {
  console.log(`server running at http://localhost:${port}`);
});
