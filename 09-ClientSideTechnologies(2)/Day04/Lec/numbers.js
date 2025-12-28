let num = 519.376; // primitive number
let numObj = new Number(519.376); // object number
console.log(num, numObj);

console.log(Number("123"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(" g   10"));

//////////////////////
/** Number instance methods */
console.log(num.toFixed(2)); // Object type coercion
console.log(new Number(num));
console.log(new Number(num).toFixed(2));
console.log(numObj.toFixed(2));

console.log(num == new Number(num));
console.log(num === new Number(num));
console.log(numObj.valueOf());

console.log(num.toPrecision(2));
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));
console.log(num.toString(6));
console.log(num.toString(3));
console.log(num.toString(32));
console.log(num.toString(36));
// console.log(num.toString(37)); // error must be between 2 and 36

let number = 1920576;
console.log(number);
console.log(number.toLocaleString());
console.log(number.toExponential());

/** Number static properties */

console.log(Number.NaN);
console.log(Number.NaN == Number.NaN);
console.log(Number.NaN === Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);
console.log(-1 / 0);
console.log(0 / 0);

/** Number static methods */
// methods inside Number Constructor doesn't convert to number

console.log(Number.isFinite(1));
console.log(Number.isFinite(0));
console.log(Number.isFinite("1"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(true));
console.log(Number.isFinite(false));
console.log(Number.isFinite(null));
console.log(Number.isFinite(undefined));

console.log(Number.isInteger(0));
console.log(Number.isInteger(1));
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.1));
console.log(Number.isInteger("1")); // false

console.log(Number.isNaN(1)); // false
console.log(Number.isNaN("1")); // false
console.log(Number.isNaN("ahmed")); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(0)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(undefined)); // false

console.log(Number("1"));
console.log(Number("1.5"));
console.log(Number("1.5a"));

console.log(Number.parseInt(1));
console.log(Number.parseInt(1.5));
console.log(Number.parseInt("1"));
console.log(Number.parseInt("1.5"));
console.log(Number.parseInt("1.5a"));
console.log(Number.parseInt("a1.5"));
console.log(Number.parseInt("12a.5"));

console.log(Number.parseFloat(1));
console.log(Number.parseFloat(1.5));
console.log(Number.parseFloat("1.5"));
console.log(Number.parseFloat("01.5"));
console.log(Number.parseFloat("1.5aadadad"));
console.log(Number.parseFloat("aadadad1.5"));

// let age = prompt("Enter your age");
// let age = Number(prompt("Enter your age"));
// console.log(age);
// console.log(typeof age);

/** Math Object */
console.log(Math.E);
console.log(Math.PI);

console.log(Math.abs(10));
console.log(Math.abs(-10));

console.log(Math.random()); // [0, 1[ * 10 =  [0, 10[ 9.999999

console.log(Math.floor(9.999999));
console.log(Math.floor(9.000000001));

console.log(Math.ceil(9.999999999));
console.log(Math.ceil(9.000000001));

console.log(Math.round(9.999999999));
console.log(Math.round(9.000000001));

console.log(Math.max(10, 50, 3, 700, 0.93));
console.log(Math.min(10, 50, 3, 700, 0.93));
console.log(2 ** 2);
console.log(Math.pow(2, 2));

console.log(Math.sqrt(16));
console.log(Math.cbrt(27));
