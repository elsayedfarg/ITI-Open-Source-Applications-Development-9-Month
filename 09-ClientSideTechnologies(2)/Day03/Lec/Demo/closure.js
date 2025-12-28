/** High order function */

function createCounter() {
	let count = 0;
	return () => count++; // closure
}

const counter1 = createCounter();
const counter2 = createCounter();

console.dir(counter1);
console.dir(counter2);

counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
console.log(counter1());

counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
counter2();
console.log(counter2());
