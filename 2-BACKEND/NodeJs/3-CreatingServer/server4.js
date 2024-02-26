// !creating different request from the same port

var http = require("http");

http
  .createServer((req, res) => {
    // if default page is called
    if (req.url == "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<p>Hello Guest</p>");
    }
    // if admin page is called
    else if (req.url == "/admin") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<p>Hello admin</p>");
    }
    // if user page is called
    else if (req.url == "/user") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<p>Hello User</p>");
    }
    // if any different is called
    else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page Not Found</h1>");
    }
    // for ending the server
    res.end();
  })
  .listen(2002);
