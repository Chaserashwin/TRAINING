const fs = require("fs");

console.log("Welcome: ");
//--------------------------------------------------------------------------------------//
data = "This is to read in the file ";
fs.writeFile("./write.txt", data, (err) => {
  if (err) console.log("Unsuccessfull to Update file");
  else console.log("Successfully updated");
});

data2 = " uske age ki baat";
fs.appendFile("./write.txt", data, (err) => {
  if (err) console.log("Unsuccessfull to Update file");
  else console.log("Successfully updated");
});

console.log("Hello");
