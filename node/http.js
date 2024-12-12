"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello there!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

server.listen(8080, () => {
  console.log("Server läuft auf Port 8080");
});
