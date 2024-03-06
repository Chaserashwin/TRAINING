import fs from "fs/promises";

let a = await fs.readFile("ashwin.txt");

let b = await fs.appendFile("ashwin.txt", "\n\n\nthis is an amazing promise");
console.log(a.toString());
