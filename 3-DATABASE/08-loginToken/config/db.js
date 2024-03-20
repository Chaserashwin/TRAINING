const mongoose = require("mongoose");
// 127.0.0.1
// connecting to database
mongoose
  .connect("mongodb://localhost:27017/crudTestDB")
  .then(() => {
    console.log(`Database connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
