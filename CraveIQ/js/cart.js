let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ---------------------------
   ADD ITEM TO CART
----------------------------*/
// function addToCart(restaurantId, item) {
//   const existingItem = cart.find(
//     (i) => i.itemId === item.id && i.restaurantId === restaurantId
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({
//       restaurantId,
//       itemId: item.id,
//       name: item.name,
//       price: item.price,
//       veg: item.veg,
//       quantity: 1
//     });
//   }

//   saveCart();
//   renderCart();
//   updateCartCount();
// }

function addToCart(restaurantId, item) {
  const existingItem = cart.find(
    (i) => i.itemId === item.id && i.restaurantId === restaurantId
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      restaurantId: restaurantId,
      itemId: item.id,
      name: item.name,
      price: Number(item.price),
      veg: item.veg,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  updateCartCount();
}



/* ---------------------------
   REMOVE ITEM FROM CART
----------------------------*/
function removeFromCart(itemId, restaurantId) {
  cart = cart.filter(
    (item) => !(item.itemId === itemId && item.restaurantId === restaurantId)
  );

  saveCart();
  renderCart();
  updateCartCount();
}

/* ---------------------------
   INCREASE QUANTITY
----------------------------*/
function increaseQty(itemId, restaurantId) {
  const item = cart.find(
    (i) => i.itemId === itemId && i.restaurantId === restaurantId
  );

  if (item) item.quantity += 1;

  saveCart();
  renderCart();
  updateCartCount();
}

/* ---------------------------
   DECREASE QUANTITY
----------------------------*/
function decreaseQty(itemId, restaurantId) {
  const item = cart.find(
    (i) => i.itemId === itemId && i.restaurantId === restaurantId
  );

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      cart = cart.filter(
        (i) => !(i.itemId === itemId && i.restaurantId === restaurantId)
      );
    }
  }

  saveCart();
  renderCart();
  updateCartCount();
}

/* ---------------------------
   CALCULATE TOTAL
----------------------------*/
function getTotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

/* ---------------------------
   SAVE CART
----------------------------*/
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ---------------------------
   RENDER CART (UI HOOK)
   👉 connect this to your cart sidebar/page
----------------------------*/
function renderCart() {
  const cartContainer = document.getElementById("cart");

  if (!cartContainer) return;

  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${item.name} - ₹${item.price}</p>
      <p>Qty: ${item.quantity}</p>
      <button onclick="increaseQty(${item.itemId}, ${item.restaurantId})">+</button>
      <button onclick="decreaseQty(${item.itemId}, ${item.restaurantId})">-</button>
      <button onclick="removeFromCart(${item.itemId}, ${item.restaurantId})">Remove</button>
    `;

    cartContainer.appendChild(div);
  });

  // optional total display
  const totalEl = document.getElementById("cart-total");
  if (totalEl) {
    totalEl.innerText = "Total: ₹" + getTotal();
  }
}

/* ---------------------------
   INIT
----------------------------*/
renderCart();

// new function to update the cart count in the UI

function updateCartCount() {
  const count = cart.reduce((total, item) => {
    return total + (Number(item.quantity) || 0);
  }, 0);

  const countEl = document.getElementById("cart-count");

  if (countEl) {
    countEl.innerText = count;
  }
}

// new
function toggleCart() {
  const cartBox = document.getElementById("cart");

  if (!cartBox) return;

  if (cartBox.style.display === "block") {
    cartBox.style.display = "none";
  } else {
    cartBox.style.display = "block";
  }
}

// function toggleCart() {
//   const cartBox = document.getElementById("cart");

//   if (!cartBox) return;

//   if (cartBox.style.display === "block") {
//     cartBox.style.display = "none";
//   } else {
//     cartBox.style.display = "block";
//   }
// }