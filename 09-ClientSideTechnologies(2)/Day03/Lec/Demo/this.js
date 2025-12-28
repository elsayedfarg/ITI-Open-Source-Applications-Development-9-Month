const Name = "Ahmed";
console.log(Name);
// console.log(window.Name);

console.log(this);

const getName = () => {
	console.log(this);
	return this; // student2.Name
};

console.log(getName());

const student = {
	Name: "Mohamed Hamdy",
	age: 23,
	brothers: ["Ahmed Hamdy", "Abdallah Hamdy"],
	marks: { html: 100, css: 60, js: 80 },
	// getNameState() {
	// 	return student.Name;
	// },
	getNameExp: getName,
	getNameStudent: function (...messages) {
		console.log(`${messages[0]}, ${this.Name}`);
		// let age = 5
		// console.log(age);
		console.log(this);
		return this.Name; // student2.Name
	},
	"full name": "Mohamed Hamdy",
};

const student2 = {
	Name: "Ali",
	age: 23,
	brothers: ["Ahmed Hamdy", "Abdallah Hamdy"],
	marks: { html: 100, css: 60, js: 80 },
	// getNameState() {
	// 	return student.Name;
	// },
	getNameExp: getName,
	getNameStudent2: student.getNameStudent,
};

console.log(student);
console.log(student.name);
console.log(student["brother"]);
console.log(student["full name"]);
console.log(student["getNameExp"]());
console.log(student2.getNameExp());

console.log(student.getNameStudent());
console.log(student2.getNameStudent2());

const func = student.getNameStudent;
console.log(func);
console.log(func());
// console.log(student.func());
// console.log(student.func("Hello", "Hi", "Welcome"));

console.log(func.call(student, "Hello", "Hi", "Welcome"));
console.log(func.call(student2, "Hello", "Hi", "Welcome"));

console.log(func.apply(student, ["Hello", "Hi", "Welcome"]));
console.log(func.apply(student2, ["Hello", "Hi", "Welcome"]));

const studentFunc = func.bind(student, "Hello", "Hi", "Welcome");
console.dir(studentFunc);
console.log(studentFunc());

console.log(studentFunc.call(student2, "Greeting", "Good Morning"));

console.log(typeof function () {});
