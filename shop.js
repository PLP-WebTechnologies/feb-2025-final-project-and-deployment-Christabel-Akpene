
// updating number of items in cart when the page is loaded
document.addEventListener("DOMContentLoaded", updateCartCount);
const cart = document.querySelector(".cart");

// navigating to cart page on click of cart icon
cart.onclick = () =>{
    window.location.href = "cart.html"
}


// importing and displaying data from data.js

import jewelryData from "./data.js";

let jewelryContainer = document.querySelector(".jewelry-container");
let tableBody = document.getElementById("table");
console.log("hurray");
console.log(tableBody);
let braceletData = jewelryData.bracelets;

console.log(braceletData);

braceletData.forEach((element) => {
  let jewelry = document.createElement("div");
  let img = document.createElement("img");
  let imgName = document.createElement("p");
  let imgPrice = document.createElement("p");

  imgName.textContent = element.name;
  imgPrice.textContent = `$ ${element.price}`;
  img.src = `${element.image}`;

  jewelry.appendChild(img);
  jewelry.appendChild(imgName);
  jewelry.appendChild(imgPrice);

  jewelry.classList.add("jewelry");
  img.classList.add("img");

  let add_to_cart = document.createElement("div");
  let shopping = document.createElement("div");
  add_to_cart.appendChild(shopping);
  add_to_cart.classList.add("add-to-cart");
  shopping.classList.add("shopping");
  shopping.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
  jewelry.appendChild(add_to_cart);

  jewelryContainer.appendChild(jewelry);

  // adding an item to cart on clicking the cart item
  shopping.onclick = () => {
    const item = {
        name: element.name,
        price: element.price,
        image: element.image,
        quantity: 1
    };
    // adding cart item to local storage.
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    cart.push(item); 
    localStorage.setItem("cartItems", JSON.stringify(cart));
    updateCartCount()

  };


});
