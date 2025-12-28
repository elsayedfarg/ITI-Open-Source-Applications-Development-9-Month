//========================== Question 1 ==========================//

// const tips = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// const tipOfTheDay = () => {
//   let randomIndex = Math.floor(Math.random() * tips.length);
//   return tips[randomIndex];
// };

// console.log(tipOfTheDay());

//==========================// Question 1 //==========================//

//========================== Question 2 ==========================//

// const grades = [60, 100, 10, 15, 85];

// // grades.sort((a, b) => {
// //   return b - a;
// // });
// // console.log(grades);

// const highestDegree = grades.find((element) => {
//   return element <= 100;
// });
// // console.log(highestDegree);

// // grades.forEach((grade) => {
// //   if (grade < 60) console.log(grade);
// // });

//==========================// Question 2 //==========================//

//========================== Question 3 ==========================//

// const students = [
//   {
//     Name: "user0",
//     Degree: 100,
//   },
//   {
//     Name: "Nader",
//     Degree: 95,
//   },
//   {
//     Name: "Mohamed",
//     Degree: 90,
//   },
//   {
//     Name: "user3",
//     Degree: 60,
//   },
//   {
//     Name: "ahmed",
//     Degree: 50,
//   },
//   {
//     Name: "user5",
//     Degree: 40,
//   },
//   {
//     Name: "user6",
//     Degree: 20,
//   },
// ];

// const between90and100 = students.find((s) => {
//   return s.Degree > 90 && s.Degree < 100;
// });

// // console.log(between90and100);

// // students.forEach((s) => {
// //   if (s.Degree < 60) {
// //     console.log(s.Name);
// //   }
// // });

// students.push({ Name: "user7", Degree: 10 });

// // students.forEach((s) => {
// //   console.log(s);
// // });

// students.pop();
// // students.forEach((s) => {
// //   console.log(s);
// // });

// // students.sort((s1, s2) => {
// //   let FirstStudentName = s1.Name.toUpperCase();
// //   let SecondStudentName = s2.Name.toUpperCase();
// //   if (FirstStudentName < SecondStudentName) return -1;
// //   else if (SecondStudentName > FirstStudentName) return 1;
// //   else return 0;
// // });

// // students.forEach((element) => {
// //   console.log(element);
// // });

// students.splice(2, 0, { Name: "New1", Degree: 1 }, { Name: "New2", Degree: 2 });

// // students.forEach((element) => {
// //   console.log(element);
// // });

// const removedStudents = students.slice(3, 4);
// console.log(removedStudents);
// students.forEach((element) => {
//   console.log(element);
// });

//==========================// Question 3 //==========================//

// let isLoggedIn = true;
// let isEmailVerified = false;

// if (isLoggedIn && isEmailVerified) {
//   console.log("Access garanted");
// } else {
//   console.log("Access denied");
// }

// let failed = 0;
// // let success=0;
// let password = "test";
// let check;
// while (failed <= 3) {
//   const check = prompt("Enter the password");
//   if (password === check) break;
//   else {
//     failed++;
//   }
// }
// console.log(failed);
