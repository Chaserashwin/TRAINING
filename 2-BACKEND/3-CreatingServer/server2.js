//creating server port for html text

var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(202, { "Content-Type": "text/html" });
    res.write("<h3>Ashwin</h3>");
    res.end();
  })
  .listen(2002);
