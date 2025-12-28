// "use strict";
/** Object */
let student1 = {
	0: "value",
	name: "Ali",
	age: 23,
	status: true,
	allowance: null,
	printName: function () {
		return student1.name;
	},
	key: "Hello",
	nestedObj: {},
	true: "Yes",
}; /** Object literal */

console.log(student1);
console.log(student1.city);
console.log(student1[0]);
console.log(student1["0"]);
console.log(student1["true"]);
console.log(student1[true]);

/** Dot notation */
console.log(student1.name);
console.log(student1.age);
console.log(student1.status);
console.log(student1.city); // undefined

/** Bracket notation */

console.log(student1["name"]);

// let key = prompt("Please enter the required key");
// console.log(key);

console.log(student1.key);
console.log(student1["key"]);
// console.log(student1[key]);

student1.age = 30;
console.log(student1);

student1.city = "Zagazig";
console.log(student1);

console.log(typeof student1);

console.log(student1.printName()); // method
////////////////////////////////

/** Array */
let arr1 = [
	10,
	20,
	30,
	40,
	"Yehia",
	false,
	function () {
		console.log("Hello from array");
	},
];

console.log(arr1);
console.log(typeof arr1);
console.log(arr1[4]);
arr1[4] = "Karim";
console.log(arr1[4]);

// Array Built-in methods

console.log(arr1.length);
arr1[7] = { name: "Mohamed" };
console.log(arr1);

arr1[arr1.length - 1] = "Hello";

console.log(arr1[50]);

arr1[arr1.length - 1];
console.log(arr1.length);

///////////////////////////
// Array.prototype.push(...items)
let x = arr1.push(["yellow", "green"], 100, "Momen", true);
console.log(arr1);
console.log(x);
console.log(arr1.length);

// Array.prototype.unshift(...items)
let y = arr1.unshift("red", "blue");
console.log(arr1);
console.log(y);

// Array.prototype.pop()
let removedElement = arr1.pop();
console.log(arr1);
console.log(removedElement);

// Array.prototype.shift()
let removedItem2 = arr1.shift();
console.log(arr1);
console.log(removedItem2);

// Array.prototype.splice()
let removedElements2 = arr1.splice(2, 2, 100, false, () => {});
console.log(arr1);
console.log(removedElements2);

// arr1.splice(3);
// console.log(arr1);

// Array.prototype.slice()
let slicedArray = arr1.slice(5, 11);
console.log(arr1);
console.log(slicedArray);

slicedArray.splice(2, 4); // methods chaining
console.log(arr1);
console.log(slicedArray);

// Array.prototype.indexOf()
console.log(arr1.indexOf(false));
console.log(arr1.indexOf("Ahmed")); // -1 not found

// Array.prototype.lastIndexOf()
console.log(arr1.lastIndexOf(false));

// Array.prototype.join()
let names = ["Ahmed", "Mohamed", "Ali", {}];
console.log(names.join());
console.log(names.join(","));
console.log(names.join(" "));
console.log(names.join("+"));
console.log(names.join("afjnaljfna"));

// names.join().splice();

// Array.prototype.at(index)
console.log(arr1[-1]); // undefined
console.log(arr1.at(0));
console.log(arr1.at(-1));

// Array.prototype.includes()
console.log(arr1.includes(false));
console.log(arr1.includes("Ahmed"));

////////////////////////////////////////
// FUNCTIONS

// 1) Function Declaration / Function Statement
console.log(add);

function add(...numbers /** rest parameter */) {
	// if (arguments.length > 2) throw new Error("Cannot call this function with more than two arguments");
	console.log(arguments);
	console.log(numbers);

	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
	console.log(arguments[2]);
	console.log(arguments[4]);

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
}

console.log(typeof add);
console.dir(add);
console.log(add(1, 2, 3, 4, 5, 6));

// 2) Function Expression
// console.log(addExpression);
const addExpression = /** anonymous function */ function (...numbers) {
	console.log(arguments);

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
};
console.log(addExpression);

console.log(addExpression(1, 2, 3, 4, 5, 6));

// 3) Arrow Functions

const addArrow = /** anonymous function */ (...numbers) => {
	// console.log(arguments); // arguments object is not created in memory for arrow functions

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum;
};
console.log(addArrow);
console.log(addArrow(1, 2, 3, 4, 5, 6));

const addTwoNumbers = (num1, num2) => num1 + num2;
console.log(addTwoNumbers(1, 2));

/////////////////////////

function multiply(num1, num2 = 1 /** default parameter */) {
	console.log(num1, num2);
	return num1 * num2;
}
console.log(multiply(2, 3));
console.log(multiply(4));

//////////
/** High-order function */
function multiplyBy(num) {
	return function (n) {
		return num * n;
	};
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo);
console.log(multiplyByTwo(5));
console.log(multiplyByTwo(10));

///////////////////////////
/** High-order function */
function double(fn /** callback function */, num1, num2) {
	return fn(num1, num2) * 2;
}
console.log(double);
console.log(double(multiply, 1, 2));

//////////////////////////////////////////////////
// Array iterative built-in methods

const students = [
	{
		name: "Ali",
		age: 23,
		status: true,
		allowance: 1500,
		marks: { html: 100, css: 95, js: 90 },
	},
	{
		name: "Mohamed",
		age: 24,
		status: true,
		allowance: null,
		marks: { html: 90, css: 98, js: 99 },
	},
	{
		name: "Yehia",
		age: 20,
		status: true,
		allowance: null,
		marks: { html: 95, css: 98, js: 99 },
	},
];

// Array.prototype.find()
// let studentLessThan100 = students.find(function (element) {
// 	console.log(element.name);
// 	let mark = element.marks.html;
// 	// console.log(mark);

// 	if (mark < 100) return true;
// 	return false;
// });

let studentLessThan100 = students.find((element) => (element.marks.html < 100 ? true : false));

console.log(studentLessThan100);

// Array.prototype.filter()
console.log(
	students.filter(function (element) {
		console.log(element.name);
		let mark = element.marks.html;
		// console.log(mark);

		if (mark < 100) return true;
		return false;
	})
);

////////////////////////////
//
for (let i = 0; i < students.length; i++) {
	// console.log(students[i]);
}

// students.forEach((element) => (element.id = element.name));

console.log(
	students.map((element) => {
		element.id = element.name;
		return element;
	})
);
console.log(students);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.forEach((element) => element * 2));
console.log(numbers);

console.log(numbers.map((element) => element * 2));
console.log(numbers);

let sum = numbers.reduce((sum, element) => {
	sum += element;
	return sum;
}, 0);
console.log(sum);

const names2 = ["Ahmed", "Mohamed", "Ali"];
let fullName = names2.reduce((fullName, element) => {
	fullName += element + " ";
	return fullName;
}, "");
console.log(fullName);

// sort
// some
// every
// reverse
