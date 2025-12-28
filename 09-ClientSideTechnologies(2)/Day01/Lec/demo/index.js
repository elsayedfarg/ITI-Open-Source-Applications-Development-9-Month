"use strict";

// Hoisting
// var mohamed;
// let num10;

// Variables
var data = 5;
var Data = 5;
var dAtA = 5;
var _data = 5;
var $data = "Hello, world";
var isValid = true;
var x; // undefined
var y = null;

// Data Types
var num = 1; // number
var firstName = "Ahmed"; // string
var isStudent = false; // boolean
var z; // undefined
var salary = null; // null
var id = Symbol("10"); // symbol
var largeNumber1 = 1234567n; // bigint
var largeNumber2 = BigInt(1234567); // bigint

var obj = {
	name: "Ali",
}; // object

console.log(5);
console.log(firstName);
console.log("5");
console.log("5", isStudent, z, salary);

// Operators

// 1) Arithmetic Operators

console.log(1 + 2); // addition
console.log(1 - 2); // subtraction
console.log(1 * 2); // multiplication
console.log(1 / 2); // division
console.log(1 % 2); // remainder
console.log(2 ** 2); // power

console.log(1 + "2"); // type coercion -> string concatenation
console.log("Ahmed" + " " + "Ramadan");

console.log(10 + true);
console.log(false + 10);

console.log(z);
console.log(typeof undefined);

console.log(z + 1);
console.log(typeof (z + 1));

console.log(salary);
console.log(typeof salary); // object (bug)
console.log(salary + 1);
console.log(null + undefined);

console.log(1 + "3" + 2);
// console.log(+"a");

// Assignment =
var num1 = 5;
var num2 = num1;
console.log(num2);
num2 += 5;
console.log(num2);
num2 -= 3;
console.log(num2);
num2 *= 2;
console.log(num2);
num2 /= 7;
console.log(num2);

// Priorities (Order of precedence)

console.log(1 + (2 * 3) / 4);
// 1- ()
// 2- **
// 3- * /
// 4- + -

// Comparison Operators
// equality - not equal - less than - greater than
console.log(1 == 1);
console.log(1 == "1"); // value (loose equality)
console.log(1 === "1"); // value and type (string equality)

console.log(1 == 2);
console.log(1 != "1"); // false
console.log(1 !== "1"); // true

console.log(1 < 1);
console.log(1 < 2);

console.log(2 > 1); // 1 < 2 (true)
console.log(2 > 2);

console.log(1 <= "1");
console.log(2 > "1");
console.log(0 < "1");

console.log("a" < "b");
console.log("a" < "A");
console.log("a" < "ahfushfjsnfkasjfskfb");

console.log("aaa" < "aa");
console.log("z" < "adda");

// loop for length of the smallest string:
//      if str1[i] < str2[i] return true
//      else if str2[i] < str1 [i] return false
// if (str1.length < str2.length) return true
// else return false

/** Logical Operators */
// AND && OR || NOT !

function stop1() {
	console.log("STOP");
	return false;
}

function go() {
	console.log("GO");
	return true;
}

// console.log(5 != 3 && stop1() && go()); // false

console.log(go() || stop1());

console.log(!true);
console.log(!false);

console.log(!(go() || stop1()));

///////////////////////////////////

// Hoisting
console.log(mohamed);
var mohamed = "Mohamed Ali";
console.log(mohamed);

var mohamed = 5;
console.log(mohamed);

// let, const
// console.log(num10);

// TDZ (Temporal Dead Zone)
let num10 = 100;
console.log(num10);

// console.log(newName);

// TDZ (Temporal Dead Zone)
const newName = "Yehia";
// newName = "Karim";
console.log(newName);

//////////////////////////////////

// Statements

// Block of code
{
	const o = 9;
	console.log(o);
}

// 1) Conditional Statements
// if - else if - else
// switch

if (` `) {
	console.log("hello");
}

// Falsy values
// 1) false
// 2) 0
// 3) Empty string '', "", ``
// 4) undefined (Nullish value)
// 5) null (Nullish value)

if (10 < 20) {
	console.log("10 < 20");
} else if (10 == 10) {
	console.log("10 == 10");
} else {
	console.log("10 == 20");
}

// Ternary Operator ?
10 < 20 ? console.log("10 < 20") : 10 == 10 ? console.log("10 == 10") : console.log("10 == 20");

// switch
let K = 750;
// Fall through
switch (K) {
	case 500:
	case 750:
		console.log("K == 500 || K == 750");
		break;
	case 1000:
		console.log("K == 1000");
		break;
	case 1500:
		console.log("K == 1500");
		break;
	default:
		console.log("Not applicable");
}

// Loop Statements

for (let i = 0; i < 10; i++) {
	console.log(i);
}

// While Loop

let i = 10;
console.log(i);
while (i < 10) {
	console.log(i);
	i++;
}

// Do-While
let j = 10;
do {
	console.log(j);
	j++;
} while (j < 10);

///////////////////////////

// Scope
// 1) Global Scope

// var global1 = "Global";
// let global1 = "Global";
const global1 = "Global";

console.log(global1);

{
	console.log(global1);
}

function logGlobal() {
	console.log(global1);
}
logGlobal();

// 2) Block Scope
{
	var block = "Block";
	// let block = "Block"; // block scoped
	// const block = "Block"; // block scoped
}

console.log(block);

{
	console.log(block);
}

function logBlock() {
	console.log(block);
}
logBlock();

// 3) Function Scope

function functionScope() {
	// var fn = "Block"; // function scoped
	// let block = "Block"; // function scoped
	const block = "Block"; // function scoped
}

// console.log(fn);

{
	// console.log(fn);
}

function logBlock() {
	// console.log(fn);
}
logBlock();


// STRINGS

let str1 = 'String 1'; // string literal
let str2 = "String 2"; // string literal
let str3 = `String 3`; // template literal

console.log(str1,str2,str3)

console.log(str1 + ' ' +str2)

console.log(`${str1} ${str2} ${1+2}`)

// Line comment
// 
/* Block comment multiline 
adad
adad
adadad
adadad
*/

if (5 < 10 /*.expression that evaluates to true */){
    console.log('5 < 10')
}