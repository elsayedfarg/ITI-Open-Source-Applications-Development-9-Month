const http = require("http"); // <-- quotes are mandatory

const server = http.createServer((req, res) => {
  // Set JSON response header by default
  res.setHeader("Content-Type", "application/json");

  // Routing
  if (req.url === "/") {
    res.writeHead(200);
    res.end(`<h1>Welcome to the home page</h1>`);
  } else if (req.url === "/about") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "This is a simple Node.js server." }));
  } else if (req.url === "/students") {
    res.writeHead(200);
    res.end(JSON.stringify(students));
  } else if (req.url === "/favicon.ico") {
    // Prevent browser favicon requests from showing in logs
    res.writeHead(204); // No Content
    res.end();
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
