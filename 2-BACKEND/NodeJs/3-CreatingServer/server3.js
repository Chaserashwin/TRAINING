// creating new page from the same port

var http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/admin") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<p>Admin Page</p>");
    } else {
      res.writeHead(202, { "Content-Type": "text/html" });
      res.write("<h3>Ashwin</h3>");
    }
    res.end();
  })
  .listen(2002);
