// document.querySelectorAll("a").forEach((element) =>
// 	element.addEventListener("click", function (event) {
// 		this.style.backgroundColor = "pink";
// 		console.log(this);
// 		console.log(event);
// 		event.stopPropagation();
// 	})
// );

/** Event Delegation */

function changeColor(event) {
	console.log(event);

	const target = event.target;

	if (target.classList.contains("link")) {
		target.style.backgroundColor = "pink";
		console.log(this);
		console.log(event);
		// event.stopPropagation();
	}
}

document.querySelector("ul").addEventListener("click", changeColor);

document.querySelectorAll("li").forEach((element) =>
	element.addEventListener("click", function (event) {
		this.style.backgroundColor = "lightgreen";
		console.log(event.target);
		console.log(this);
		console.log(event);
	})
);

document.querySelector("ul").addEventListener("click", function (event) {
	this.style.backgroundColor = "crimson";
	console.log(this);
	console.log(event);
});

document.querySelector("nav").addEventListener("click", function (event) {
	this.style.backgroundColor = "brown";
	console.log(this);
	console.log(event);
});

document.querySelector("header").addEventListener("click", function (event) {
	this.style.backgroundColor = "green";
	console.log(this);
	console.log(event);
});

document.body.addEventListener("click", function (event) {
	this.style.backgroundColor = "black";
	console.log(this);
	console.log(event);
});
