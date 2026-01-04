const loadProductsBtn = document.querySelector(".load-products-btn");
const productsOptionList = document.querySelector("#load-products-options");
const loadDetailsBtn = document.querySelector(".load-details ");
const productCard = document.querySelector(".product-card");

const url = `https://fakestoreapi.com/products`;
const getProducts = function () {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then((jsonResponse) => {
      //   console.log(jsonResponse);
      jsonResponse.forEach((product) => {
        const item = `<option value = ${product.id}>${product.title}</option>`;
        productsOptionList.innerHTML += item;
      });
      loadDetailsBtn.classList.remove("btn-disabled");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const displayProductCard = function () {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then((jsonResponse) => {
      if (!loadDetailsBtn.classList.contains("btn-disabled")) {
        const option = document.querySelector(
          "#load-products-options option:checked"
        );
        const selectedId = Number(option.value);

        const product = jsonResponse.find((item) => item.id === selectedId);
        // console.log(product);
        const productCardContent = `<img
            src="${product.image}"
            alt=""
          />
          <span class="price">${product.price}</span>
          <p class="description">
            ${product.description}
          </p>`;
        productCard.innerHTML = productCardContent;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

loadProductsBtn.addEventListener("click", getProducts);

loadDetailsBtn.addEventListener("click", displayProductCard);
