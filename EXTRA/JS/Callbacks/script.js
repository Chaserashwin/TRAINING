console.log("ashwin is a hacker");
console.log("nikhil is a hecker");

setTimeout(() => {
  console.log("This is inside setTimeout");
}, 0);

setTimeout(() => {
  console.log("This is inside setTimeout 2");
}, 0);

console.log("This is the end");

// --------------------------------------------------------

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("ashwin");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
