// // Task 1

// 1-Ask the user for the size of the array
let arraySize = Number(prompt("Enter the size of the array"));

while (isNaN(arraySize)) {
  arraySize = Number(
    prompt("Invalid input. Enter a number for the size of the array:")
  );
}

let arr = [];
// 2-Receive values from the user
for (let i = 0; i < arraySize; i++) {
  // 3-Validate all entered values are numbers
  let num = Number(prompt(`Enter array[${i}]`));
  while (isNaN(num)) {
    num = Number(prompt(`Invalid input. Enter a number for array[${i}]:`));
  }
  arr[i] = num;
}

let repeat;
do {
  // 4-Ask the user to select one of the options
  let option = prompt(
    "Choose an option:\n" +
      "a - Display array in the same order\n" +
      "b - Display array in ascending order\n" +
      "c - Display array in descending order\n" +
      "d - Display reversed version of the original array\n" +
      "e - Display only even numbers\n" +
      "f - Display elements divisible by a number you enter\n" +
      "g - Display a new array with 30% discount applied\n" +
      "h - Display all numbers concatenated with ***"
  ).toLowerCase();

  switch (option) {
    case "a":
      console.log("Array in same order:", arr);
      break;
    case "b":
      // slice() to print the new array without affecting the original one
      console.log(
        "Array in ascending order:",
        arr.slice().sort((x, y) => x - y)
      );
      break;
    case "c":
      console.log(
        "Array in descending order:",
        arr.slice().sort((x, y) => y - x)
      );
      break;
    case "d":
      console.log("Original array reversed", arr.slice().reverse());
      break;
    case "e":
      const evenNumbers = arr.filter((n) => n % 2 === 0);
      if (evenNumbers.length > 0) {
        console.log("Even numbers:", evenNumbers);
      } else {
        alert("No even numbers found in the array!");
      }
      break;
    case "f":
      let divisor = Number(prompt("Enter a number to check divisibility:"));
      while (isNaN(divisor) || divisor === 0) {
        divisor = Number(prompt("Invalid input. Enter a non-zero number:"));
      }
      const divisible = arr.filter((n) => n % divisor === 0);
      if (divisible.length > 0) {
        console.log(`Numbers divisible by ${divisor}:`, divisible);
      } else {
        alert(`No numbers divisible by ${divisor} found!`);
      }
      break;
    case "g":
      const discounted = arr.map((n) => n * 0.7);
      console.log("Array with 30% discount applied:", discounted);
      break;
    case "h":
      console.log("Array concatenated with ***:", arr.join("***"));
      break;
    default:
      console.log("Invalid option. Please enter a letter from a to h.");
  }
  const userChoice = prompt(
    "You want to repeat the program? [yes/no]"
  ).toLowerCase();
  repeat = userChoice === "yes" || userChoice === "y";
} while (repeat); // 5-Repeat if the user want that

// ==============================================================//

// Task 2

const countVowels = function (string) {
  const vowels = "aeiou";
  let counter = 0;

  for (const char of string) {
    if (vowels.includes(char)) counter++;
  }
  return counter;
};

console.log(countVowels("test this function again"));

// ==============================================================//

// Task 3

const capitalize = function (string) {
  let stringWords = string.split(" ");
  let capitalizedWords = stringWords.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};
console.log(capitalize("test this function"));

// ==============================================================//

// Task 4
const countLetterInAString = function (str, ch) {
  let counter = 0;
  for (let char of str) {
    if (char == ch) counter++;
  }
  return counter;
};

console.log(countLetterInAString("test this function", "t"));

// ==============================================================//

// Task 5
const countWords = function (str) {
  const wordsArray = str.split(" ");
  return wordsArray.length;
};

console.log(countWords("count the number of the words"));

//==============================================================//

// Task 6

// 1-
let name = prompt("Enter your name:");

while (!name || name.trim() === "") {
  name = prompt("Please enter a valid name:");
}

console.log(name);

// 2-
let number = prompt("Enter your mobile number (XXX-XXXXXXX)");

if (/^(010|011|012|015)-\d{7}$/.test(number)) {
  alert("Valid mobile number");
} else {
  alert(
    "Invalid mobile number. Please follow XXX-XXXXXXX format and start with 010, 011, 012, or 015."
  );
}

// ==============================================================//

// // Task 7
// // Part 2: Birth Date Validation
// const bDate = prompt("Enter the birth date in this format DD-MM-YYYY");

// const validateBirthDate = function (bDate) {
//   return bDate.length === 10 && bDate[2] === "-" && bDate[5] === "-";
// };

// if (validateBirthDate(bDate)) {
//   const day = Number(bDate.substring(0, 2));
//   const month = Number(bDate.substring(3, 5)) - 1; // month is 0-based
//   const year = Number(bDate.substring(6, 10));

//   // a-valid format
//   const d = new Date(year, month, day);
//   alert("Your birth date is: " + d.toDateString());
// } else {
//   // b-invalid format
//   alert("Wrong Date Format");
// }

// ==============================================================//

// Additional Requirements

// 1-
const days = [
  // start with sunday
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];
const getDayNameFromDate = function (strDate) {
  const day = Number(strDate.substring(0, 2));
  const month = Number(strDate.substring(3, 5)) - 1;
  const year = Number(strDate.substring(6, 10));

  const dateObj = new Date(year, month, day);
  const dayIndex = dateObj.getDay();

  return days[dayIndex];
};

const userDate = "07-09-2003";

const dayName = getDayNameFromDate(userDate);

alert(dayName);

// 2-Modify task 6
const mobileNumber = prompt(
  "Enter your mobile number in international format (00201xxxxxxxxx):"
);

const validateMobileNumber = function (number) {
  if (number.length !== 14) return false;

  // 2. Check numbers only
  if (!/^\d+$/.test(number)) return false;

  if (number.substring(0, 3) !== "002") return false;

  const followed = number.substring(3, 6);
  if (followed !== "010" && followed !== "011" && followed !== "012")
    return false;

  return true;
};

if (validateMobileNumber(mobileNumber)) {
  alert("Valid mobile number!");
} else {
  alert("Invalid mobile number format.");
}

// 3-Modify task 2
const bDate = prompt("Enter the birth date in this format DD-MM-YYYY");

const validateBirthDate = function (bDate) {
  return bDate.length === 10 && bDate[2] === "-" && bDate[5] === "-";
};

if (validateBirthDate(bDate)) {
  const day = Number(bDate.substring(0, 2));
  const month = Number(bDate.substring(3, 5)) - 1;
  const year = Number(bDate.substring(6, 10));

  const birthDate = new Date(year, month, day);
  alert("Your birth date is: " + birthDate.toDateString());

  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  alert(
    `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days`
  );
} else {
  alert("Wrong Date Format");
}
