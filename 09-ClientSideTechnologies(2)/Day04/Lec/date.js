const date = new Date();
console.log(date);

const startDate = new Date("1 Jan 2022 00:00:00");
console.log(startDate);

console.log(startDate.getDate()); // local day
console.log(startDate.getUTCDate()); // UTC day

console.log(startDate.getDay()); // index of day in the week starting from index 0 (Sunday)
console.log(startDate.getUTCDay()); // index of day in the week starting from index 0 (Sunday)

console.log(startDate.getFullYear()); // year
console.log(startDate.getUTCFullYear()); // UTC year
console.log(startDate.getHours()); // hours
console.log(startDate.getMilliseconds()); // milliseconds
console.log(startDate.getMinutes()); // Minute
console.log(startDate.getMonth()); // Index of month starting from index 0 (January)
console.log(startDate.getSeconds());
console.log(startDate.getTime()); // unix epoch number of startDate

// Date Static Method
console.log(Date.now());
console.log(new Date(Date.now()));
