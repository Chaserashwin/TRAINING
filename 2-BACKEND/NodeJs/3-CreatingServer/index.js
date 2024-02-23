var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(203, { "Content-Type": "text/plain" });
    res.write("<h1>Hello</h1>");
    res.end();
  })
  .listen(2000);

/*
http.createServer = (req, res) => {
  res.writeHead(status code, {content type});
};
*/
