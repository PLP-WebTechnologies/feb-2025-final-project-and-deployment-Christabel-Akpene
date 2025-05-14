// updating number of items in cart when page is loaded

document.addEventListener("DOMContentLoaded", updateCartCount);
const cart = document.querySelector(".cart");
const shopButton = document.querySelector("#shop-button");
cart.onclick = () =>{
    window.location.href = "cart.html";
}
// navigating to shop on click of a button.
shopButton.onclick = () =>{
    window.location.href = "shop.html";
}