const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [7, 8];

// array1.push(array2);

// array2.forEach((element) => array1.push(element));

// Rest parameter
function sum(...values) {}

// destructuring operator

array1.push(...array2); // destructuring arrays

console.log(array1);

const array3 = [...array1, ...array2]; // (shallow copy)
console.log(array3);

const copyArrayRef = array3; // Reference copy
const copyArrayShallow = [...array3]; // Shallow copy
const copyArrayShallow2 = array3.slice(); // Shallow copy

////////////////////////////////////

const obj1 = { name: "Ali", age: 23 };
const obj2 = { isStudent: true, brothers: ["Omar", "Mohamed"], marks: { html: 100, css: 90, js: 95 } };

// for...of
// for...in

// for...in in objects => keys
// for (let key in obj2) {
// 	console.log(key);
// 	console.log(obj2[key]);

// 	// let value = obj2[key];
// 	// console.log(value);

// 	obj1[key] = obj2[key];
// }
// console.log(obj1);

// const student = {};
// for (let key in obj1) {
// 	student[key] = obj1[key];
// }
// console.log(student);

// for (let key in obj2) {
// 	student[key] = obj2[key];
// }
// console.log(student);

const student = { ...obj1, ...obj2 }; // destructuring objects (shallow copy)
console.log(student);
console.log(student.name);
console.log(obj1.name);

student.name = "Yehia";
console.log(student.name);
console.log(obj1.name);

student.marks.html = 80;
console.log(student.marks);
console.log(obj2.marks);

/////// Slides
let arr = [1, 2, 3];

let newArr = arr;
console.log(arr, newArr);

newArr[1] = 6;
console.log(newArr);
console.log(arr);

const studentRefCopy = student; // Ref copy
const studentShallowCopy = { ...student }; // Shallow copy

//////////////// Deep copy (Recursion)
// Libraries (Lodash) ._cloneDeep
// JSON.parse(JSON.stringify(obj)) (NOT RECOMMENDED)
// structuredClone

const numbers1 = [1, 2, 3, [5, 6]];
const numbers2 = structuredClone(numbers1); // deep copy (clone)

console.log(numbers1, numbers2);

numbers2[0] = 10;
console.log(numbers1, numbers2);

numbers2[3][1] = 12;
console.log(numbers1, numbers2);

////////////////////////////////////
// String Interning (Optimization)
let firstName = "Ahmed"; // strings are immutable
let firstNameCopy = "Ahmed";
firstNameCopy = "Ahmed Ramadan";

////////////////

let numbersArray = [1, 2, 3, 4];

function fn([...arr] /** destructuring */) {
	// let newArray = [...arr]; // shallow copy
	let newArray = structuredClone(arr); // deep copy
	// newArray[2] = 30;
	// console.log(newArray);

	arr[2] = 30;
	console.log(arr);
}

fn(numbersArray); // pass by reference
console.log(numbersArray);
