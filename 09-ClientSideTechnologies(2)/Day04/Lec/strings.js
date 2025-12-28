let firstName = "Ahmed"; // string literal

// prettier-ignore
let lastName = 'Ramadan'; // string literal

let fullName = `Ahmed Ramadan Mohamed`; // template literal

console.log(firstName + " " + lastName); // string concatenation
console.log(`${firstName} ${lastName}`); // string concatenation using template literal

// prettier-ignore
console.log('\nHello, world \
My name is Ahmed');

console.log('My name is "Ahmed"');
// prettier-ignore
console.log("My name is \"Ahmed\"");

console.log(firstName); // Object type coercion
console.log(new String("Ahmed"));

console.log(fullName.length);
console.log(fullName[5]);

console.log(fullName); // strings are immutable

/** String methods doesn't mutate strings; it returns a new string */
console.log(fullName.indexOf("A")); // first index
console.log(fullName.lastIndexOf("A")); // last index

console.log(fullName.indexOf("a")); // 7
console.log(fullName.lastIndexOf("a")); // 11

console.log(fullName.indexOf("Ahmed")); // if found, returns index of first character
console.log(fullName.indexOf("Ahmedd")); // if not found, returns -1

console.log(fullName.lastIndexOf("Ahmed")); // if found, returns index of first character
console.log(fullName.lastIndexOf("Ahmedd")); // if not found, returns -1

console.log(fullName.charAt(0));
console.log(fullName.charAt(7));
console.log(fullName.charAt(5));
console.log(fullName.charCodeAt(0)); // returns unicode at index

console.log(fullName.slice(4, 6));
console.log(fullName.substring(4, 6));
console.log(fullName.substr(4, 6));

console.log(fullName.replace("a", "e"));
console.log(fullName.replaceAll("a", "e"));
console.log(fullName);

// let name = prompt("Enter your name").trimStart();
// let name = prompt("Enter your name").trimEnd();
// let name = prompt("Enter your name").trim();
// console.log(name);

console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

const name = ["Ahmed", "Ibrahim", "Ramadan"];
console.log(name.join(" "));

console.log(fullName.split());
console.log(fullName.split(" "));
console.log(fullName.split(""));
const fullNameArray = fullName.split(" ");
console.log(fullNameArray);

console.log(fullName.startsWith("Ahmed"));
console.log(fullName.startsWith("Ahmedd"));

console.log(fullName.endsWith("ed"));
console.log(fullName.endsWith("Mohamed"));
console.log(fullName.endsWith("mohamed"));

console.log(firstName.concat(" ", lastName));

console.log("a" < "b");

let char1 = "a";
let char2 = "b";
console.log(char1.localeCompare(char2));
console.log(char2.localeCompare(char1));
console.log(char1.localeCompare(char1));

console.log(fullName.length);
console.log(fullName.padStart(25, "ahd"));
console.log(fullName.padEnd(25, "+"));

/** String Static Methods */
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(104));
