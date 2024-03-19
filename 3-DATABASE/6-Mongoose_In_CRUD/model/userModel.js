const mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: {
    type: String, // type is a required field
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
  createAt: {
    type: Date,
    default: Date.now(), // automatically adds
  },
});

module.exports = mongoose.model("user", userSchema);

//* using the third parameter we can add a new collection in the database "Register"
// module.exports = mongoose.model("user", userSchema, "Register");
