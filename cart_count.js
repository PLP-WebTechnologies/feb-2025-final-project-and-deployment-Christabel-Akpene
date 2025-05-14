function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const totalItems = cart.length;
  
    const cartCount = document.getElementById("count");
    if (cartCount) {
      cartCount.textContent = totalItems;
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", updateCartCount);
  