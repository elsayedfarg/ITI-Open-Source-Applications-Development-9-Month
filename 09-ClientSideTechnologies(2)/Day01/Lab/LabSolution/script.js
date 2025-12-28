// console.log(number1);

var number1 = 3;
// var number2 = 2.9;
// var number3 = 0xff;

var firstName = "john";
var middleName = "Doe";
var lastName = "Smith";

var flag = true;

console.log("this is the external js file");

console.log(typeof number1);
console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);
console.log(typeof flag);

// ### Experiment Set A: Hoisting & Declaration
// 1. In `External.js`, try printing `number1` before its declaration. // (undefined)
// 2. In HTML, add an internal `<script>` block before linking `External.js` and print `number1`.// (number1 is not defined)
// 3. In HTML, add another internal `<script>` block after linking `External.js` and print `number1`.// (it works)

// ### Experiment Set B: `var` vs. Implicit Globals
// 4. Remove the `var` keyword from `number1` and repeat Experiment Set A.// (number1 is not defined)
// Observe and note the differences.

// 6. Try to modify a string character:
// ```
// firstName[3] = 'A';
// console.log(firstName); // the same name 'john'

console.log(`Full Name:${firstName} ${middleName} ${lastName}`);
