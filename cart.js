
const cart = document.querySelector(".cart");

document.addEventListener("DOMContentLoaded", () => {
// updating the number of items in cart when it is loaded.

    updateCartCount();

    // populating the table with items in cart
    const tableBody = document.querySelector("#table tbody");
  
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    if (tableBody && cart.length > 0) {
      cart.forEach(item => {
  
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><img src="${item.image}" width="50"></td>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>
            <span class="quantity">1</span>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }

    cart.onclick = () =>{
        window.location.href = "cart.html"
    }


  });
  