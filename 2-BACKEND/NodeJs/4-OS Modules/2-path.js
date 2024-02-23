const path = require("path");

// * Basename
const basename = path.basename("Document/abc.txt");
console.log(basename);

// * Directory
const directoryName = path.dirname("Document/abc.txt");
console.log(directoryName);

// * Join Path
const joinThePath = path.join("Document/abc.txt", "/ada", "sofa");
console.log(joinThePath);

// * Extension
const extensionPath = path.extname("demo.txt");
console.log(extensionPath);
