const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// This shows how server needs to respond
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Tpe", "text/plain");
    res.end("Hello Tea");
  } else if (req.url === "/hot-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Tpe", "text/plain");
    res.end("Thanks for the hot tea");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Tpe", "text/plain");
    res.end("404 Not found");
  }
});

// Listen

server.listen(port, hostname, () => {
  console.log(`Server lis running at http://${hostname}:${port}`);
});
