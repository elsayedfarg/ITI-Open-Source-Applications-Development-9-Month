// SELECT ELEMENTS

console.log(document);
console.log(document.documentElement); // html
console.log(document.head);
console.log(document.body);

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByTagName("li")[1]);

console.log(document.getElementById("main-heading"));

console.log(document.getElementsByClassName("nav-item"));
console.log(document.getElementsByClassName("nav-item")[0]);

// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);
// arr = "ahmed";

const navItems = document.getElementsByClassName("nav-item");

// for (let i = 0; i < navItems.length; i++) {
// 	console.log(navItems[i]);
// }

const navItemsArr1 = [...navItems];
const navItemsArr2 = Array.from(navItems);
console.log(navItemsArr1);
console.log(navItemsArr2);

// navItems.forEach((element) => console.log(element));
navItemsArr1.forEach((element) => console.log(element));

//////////////////////////////////////

console.log(document.querySelector("h1"));
console.log(document.querySelector("h1#main-heading"));
console.log(document.querySelector(".nav-item"));
console.log(document.querySelector("li > a"));

console.log(document.querySelectorAll(".nav-item"));
console.log(document.querySelectorAll(".nav-item")[0]);
console.log(document.querySelectorAll(".nav-item")[1]);
console.log(document.querySelectorAll("li > a"));

document.querySelectorAll(".nav-item").forEach((element) => console.log(element));

//////////////////////////////////////////

const buttonElement = document.querySelector(".btn");
console.log(buttonElement);
