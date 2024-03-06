var express = require("express");
var routes = require("./routes/userRoutes");
var app = express();

// for using all the routes
app.use("/", routes);

app.listen(2000);
