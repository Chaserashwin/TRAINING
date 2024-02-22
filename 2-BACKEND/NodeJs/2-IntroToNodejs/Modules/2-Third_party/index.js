var readline = require("node:readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name : ", (name) => {
  console.log(`hi ${name}`);
  rl.on("close", () => {
    console.log("Success");
  }); //to prevent the overrun of program
});
