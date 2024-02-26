var mymodule = require("./mymodule");

// console.log(mymodule(3, 6)); // for default

// console.log(mymodule.add(13, 6));
// console.log(mymodule.sub(13, 6));
// console.log(mymodule.multi(13, 6));
// console.log(mymodule.divi(13, 6));

console.log("----------------------------------");
//
const arr = [11, 22, 33, 43, 15];
console.log(mymodule.highest(arr));
console.log("----------------------------------");
//
data = "this is going to be a new file";
mymodule.fileWrite("new.txt", data);
mymodule.fileRead("new.txt");
