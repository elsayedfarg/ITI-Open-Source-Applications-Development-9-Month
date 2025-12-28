// // =============================  Task 1

// const textBox = document.getElementById("text-box");

// textBox.addEventListener("keydown", (e) => {
//   alert(`Pressed Key code: ${e.keyCode}`);
// });

// textBox.addEventListener("mousedown", (e) => {
//   if (e.button == 0) {
//     alert("The left button clicked");
//   } else if (e.button == 1) {
//     alert("The middle button clicked");
//   } else {
//     alert("The right button clicked");
//   }
// });

// ============================= Task 2

// const startClockBtn = document.getElementById("start-clock");

// let theInterval = null;

// startClockBtn.addEventListener("click", () => {
//   let currentTimeDiv = document.getElementById("current-time");
//   theInterval = setInterval(() => {
//     currentTimeDiv.innerText = `Clock started ${new Date().toLocaleTimeString()}`;
//   }, 1000);
// });

// document.addEventListener("keydown", (e) => {
//   if (e.altKey && e.key.toLowerCase() === "w") {
//     if (theInterval !== null) {
//       clearInterval(theInterval);
//       theInterval = null;
//       alert("Clock stopped");
//     }
//   }
// });

// ============================= Task 3

// const textBox = document.getElementById("text-box");

// textBox.addEventListener("keydown", (e) => {
//   let keyCode = e.keyCode;

//   let isAlphabet = keyCode >= 65 && keyCode <= 90;

//   if (!isAlphabet) {
//     e.preventDefault();
//   }
// });

// ============================= Task 4

// const startClockBtn = document.getElementById("start-clock");
// const textBox = document.getElementById("text-box");

// let theInterval = null;

// startClockBtn.addEventListener("click", () => {
//   let currentTimeDiv = document.getElementById("current-time");
//   theInterval = setInterval(() => {
//     currentTimeDiv.innerText = `Clock started ${new Date().toLocaleTimeString()}`;
//   }, 1000);
// });

// textBox.addEventListener("keydown", (e) => {
//   if (e.key.toLowerCase() === "w") {
//     alert("Key Code: " + e.keyCode);

//     e.stopPropagation();
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key.toLowerCase() === "w") {
//     if (theInterval !== null) {
//       clearInterval(theInterval);
//       theInterval = null;
//       alert("Clock stopped");
//     }
//   }
// });
