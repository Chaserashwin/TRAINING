var readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name : ", (name) => {
  console.log(`hi ${name}`);
  rl.question("What is your Email : ", (email) => {
    console.log(`hi ${email}`);
    rl.question("What is your Password : ", (password) => {
      console.log(`hi ${password}`);
      rl.on("close", () => {
        console.log("Success");
      });
    });
    rl.on("close", () => {
      console.log("Success");
    });
  });
  rl.on("close", () => {
    console.log("Success");
  }); //to prevent the overrun of program
});

// rl.question("What is your Email : ", (email) => {
//   console.log(`hi ${email}`);
//   rl.on("close", () => {
//     console.log("Success");
//   });
// });

// rl.question("What is your Email : ", (password) => {
//   console.log(`hi ${password}`);
//   rl.on("close", () => {
//     console.log("Success");
//   });
// });
