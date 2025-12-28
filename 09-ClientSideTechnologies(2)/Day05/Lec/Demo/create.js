const pElement = document.querySelector("p");
console.log(pElement.innerHTML);
console.log(pElement.innerText);

// pElement.innerHTML = "<img src='' height='100' width='100'/>";
// pElement.innerText = "<img src='' height='100' width='100'/>";

const imgElement = document.createElement("img");
imgElement.src = "";
imgElement.alt = "Broken image";
imgElement.classList.add("image");

// pElement.append(imgElement);
// pElement.prepend(imgElement);
pElement.before(imgElement);
pElement.after(imgElement);

pElement.insertAdjacentElement("beforebegin", imgElement);
pElement.insertAdjacentHTML("beforebegin", "<img src='' height='100' width='100'/>");

pElement.remove();
