const fs = require("fs");
const fs = require("fs/promises");
// console.log(fs);

console.log("starting");

// fs.writeFileSync("ashwin.txt", "ashwin is a good boy");
fs.writeFile("ashwin2.txt", "ashwin is a good boy", () => {
  console.log("done");
  fs.readFile("ashwin2.txt", (error, data) => {
    console.log(error, data);
  });
  //again
  fs.writeFile("ashwin2.txt", "ashwin is a good boy", () => {
    console.log("done");
    fs.readFile("ashwin2.txt", (error, data) => {
      console.log(error, data);
    });
    //again
    fs.writeFile("ashwin2.txt", "ashwin is a good boy", () => {
      console.log("done");
      fs.readFile("ashwin2.txt", (error, data) => {
        console.log(error, data);
      });
      //again
    });
  });
});
console.log("end");

// ! This will lead to callback hell and to avoid this we use the concept of promises
