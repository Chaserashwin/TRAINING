//import the module
// import module from 'modulename'
const fs = require("fs");

console.log("Welcome: ");

// var dataread = fs.readFileSync("./demo.txt");
//-------------------------------------------------------------------------------------//
//asynchronous
fs.readFile("./demo.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

/*
    (err, data): takes two variable error or data if the file has data or not
    "utf-8": for converting buffer to data

*/
