const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/students") {
      // Create an HTTP server that:
      //   1- Serves the student data on GET /students
      res.writeHead(200, { "Content-Type": "application/json" });
      const students = await fs.readFile("students.json", "utf-8");
      res.end(students);
    } else if (req.url === "/stats") {
      // 2- Shows total number of students on GET /stats
      res.writeHead(200, { "Content-Type": "application/json" });
      const data = await fs.readFile("students.json", "utf-8");
      const students = JSON.parse(data);
      const numOfStudents = students.length;
      res.end(`Number of students is: ${numOfStudents}`);
    } else if (req.url === "/courses") {
      // 3- Shows courses list on GET /courses
      res.writeHead(200, { "Content-Type": "application/json" });
      const data = await fs.readFile("students.json", "utf-8");
      const students = JSON.parse(data);
      let courseList = students.map((student) => student.course);
      res.end(JSON.stringify(courseList));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
