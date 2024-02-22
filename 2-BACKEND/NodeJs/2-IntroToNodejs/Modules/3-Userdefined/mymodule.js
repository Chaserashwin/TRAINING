// Default export
// var x = (a, b) => {
//   return a + b;
// };
// module.exports = x;

//Named export
module.exports.add = (a, b) => {
  return a + b;
};
module.exports.sub = (a, b) => {
  return a - b;
};
module.exports.multi = (a, b) => {
  return a * b;
};
module.exports.divi = (a, b) => {
  return a / b;
};

//--> for finding the highest element in the array
module.exports.highest = (arr) => {
  arr.sort();
  arr.reverse();
  console.log("Highest element in the array is:" + arr[0]);
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Sum of array is: " + sum);
  return;
};

//--> for inputting file
module.exports.fileRead = (filename) => {
  const fs = require("fs");
  fs.readFile(`./${filename}`, "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
};

module.exports.fileWrite = (filename, data) => {
  const fs = require("fs");
  fs.writeFile(`./${filename}`, data, (err) => {
    if (err) console.log("Unsuccessful to Update file");
    else console.log("Successfully updated");
  });
};
