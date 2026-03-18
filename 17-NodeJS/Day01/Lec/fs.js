const fs = require("fs");

// // ===================== read the file sync
// console.log("before sync");
// const data = fs.readFileSync("db.json", "utf-8");
// const parsedData = JSON.parse(data);
// console.log(parsedData);
// console.log("after sync");

// // ===================== read the file async
// console.log("before async");
// const data = fs.readFile("db.json", "utf-8", (err, data) => {
//   if (err) console.error(err);
//   const parsedData = JSON.parse(data);
//   console.log(parsedData);
// });
// console.log("after async");

// // write student to the file
// const newStudent = {
//   name: "sayed mohamed",
//   address: "123 Main St, New York",
//   grade: "A",
//   courses: ["Math", "Physics", "Computer Science"],
// };

// // write over the whole file sync
// console.log("before sync");
// parsedData.push(newStudent);
// fs.writeFileSync("db.json", JSON.stringify(parsedData));
// console.log("before sync");
