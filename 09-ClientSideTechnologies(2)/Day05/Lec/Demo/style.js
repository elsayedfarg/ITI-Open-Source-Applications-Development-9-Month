/**  */

const h1Element = document.querySelector("#main-heading");
console.log(h1Element);
console.log(h1Element.style);

h1Element.style.color = "red";

console.log(h1Element.style.color);

// h1Element.style.backgroundColor = "green";
console.log(h1Element.style.height);
console.log(getComputedStyle(h1Element));

h1Element.style.height = "100px";

console.log(h1Element.className);
// h1Element.setAttribute("class", "heading");
h1Element.setAttribute("class", `${h1Element.className} heading typography`);

console.log(h1Element.getAttribute("class"));

console.log(h1Element.classList);
console.log(h1Element.classList[0]);
h1Element.classList.add("mohamed-hamdy", "class", "red");
console.log(h1Element.className);

h1Element.classList.remove("red");
console.log(h1Element.className);

h1Element.classList.toggle("uClass");
console.log(h1Element.className);

console.log(h1Element.classList.contains("heading"));
console.log(h1Element.classList.contains("oClass"));
