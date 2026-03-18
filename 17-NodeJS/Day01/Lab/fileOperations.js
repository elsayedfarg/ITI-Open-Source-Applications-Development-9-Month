const fs = require("fs");
//============================== 1-sync and async file operations ==============================//

// a.Read Sync
function readFileSync(print = false) {
  const data = fs.readFileSync("students.json", "utf-8");
  const parsedData = JSON.parse(data);
  if (print) console.log(parsedData);
  return parsedData;
}
// readFileSync(true);

// // b.read Async
function readFileAsync() {
  console.log("before async");
  fs.readFile("students.json", "utf8", (err, data) => {
    const parsedData = JSON.parse(data);
    console.log(parsedData);
    return parsedData;
  });
}
// readFileAsync();

// // c.Write file sync
function writeFileSync(newStudent) {
  const data = fs.readFileSync("students.json", "utf-8");
  let students = JSON.parse(data);
  students.push(newStudent);
  fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
}
// const newStudent = {
//   id: 4,
//   name: "sayed mohamed",
//   age: 22,
//   course: "Web Development",
//   grades: {
//     html: 95,
//     javascript: 89,
//   },
// };
// writeFileSync(newStudent);

// // d.Write file async
function writeFileAsync(newStudent) {
  fs.readFile("students.json", "utf8", (err, data) => {
    let students = JSON.parse(data);
    students.push(newStudent);

    fs.writeFile("students.json", JSON.stringify(students), "utf8", (err) => {
      console.log("Student added successfully");
    });
  });
}
const newStudent = {
  id: 5,
  name: "ahmed mohamed",
  age: 22,
  course: "Web Development",
  grades: {
    html: 95,
    javascript: 89,
  },
};

// writeFileAsync(newStudent);
//==============================// 1-sync and async file operations //==============================//

//============================== 2-Create functions ==============================//

// a-Write the studentData to students.json

const studentData = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    course: "Computer Science",
    grades: {
      math: 90,
      programming: 95,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    course: "Data Science",
    grades: {
      statistics: 88,
      machine_learning: 92,
    },
  },
  {
    id: 3,
    name: "Carol Williams",
    age: 21,
    course: "Web Development",
    grades: {
      html: 95,
      javascript: 89,
    },
  },
];

function initStudentsFile() {
  fs.writeFileSync("students.json", JSON.stringify(studentData), "utf-8");
}
// initStudentsFile();

// b-update a student course
const getStudentIndex = function (id) {
  const allStudents = readFileSync();
  const student = allStudents.findIndex((student) => student.id === id);
  return student;
};

function updateStudentCourse(id, newCourse) {
  const students = readFileSync();
  let studentIndex = getStudentIndex(id);
  if (studentIndex !== -1) {
    students[studentIndex].course = newCourse;
    fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  } else {
    console.log("student not found");
  }
}

// updateStudentCourse(1, "New Course");

// d-delete a student
function deleteStudent(id) {
  const studentIndex = getStudentIndex(id);
  let students = readFileSync();
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    fs.writeFileSync("students.json", JSON.stringify(students), "utf-8");
  } else {
    console.log("student not found");
  }
}

// deleteStudent(1);

//==============================// 2-Create functions//==============================//
