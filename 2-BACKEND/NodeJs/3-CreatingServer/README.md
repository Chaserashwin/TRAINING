//to create a server we need to first declare
var http = require("http");

// Now using this variable we can create a server which has two parameters (req,res) : request and response and it can be placed respectively only by not changing their position

http
.createServer((req, res) => {
res.writeHead(203, { "Content-Type": "text/plain" });
res.write("<h1>Hello</h1>");
res.end(); // for stopping req and res
})
.listen(2000);
