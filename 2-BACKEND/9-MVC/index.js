var express = require("express");

var routes = require("./routes/userRoutes");

var app = express();

app.use("/", routes);

app.listen(2000);
