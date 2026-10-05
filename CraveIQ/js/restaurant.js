function loadRestaurant(){

    const restaurantId = Number(localStorage.getItem("restaurantId"));

    if(!restaurantId) return;

    const restaurant = restaurants.find(function(item){

        return item.id === restaurantId;

    });

    if(!restaurant) return;

    const container = document.getElementById("restaurant-details");

    if(!container) return;

    container.innerHTML = `

        <div class="restaurant-page">

            <img src="${restaurant.image}" class="restaurant-banner">

            <h1>${restaurant.name}</h1>

            <p>⭐ ${restaurant.rating}</p>

            <p>🍽 ${restaurant.cuisine}</p>

            <p>🚚 ${restaurant.delivery}</p>

            <p>₹${restaurant.price} for one</p>

            <h2>Menu</h2>

            <div class="menu-list">

                ${restaurant.menu.map(item => `

                    <div class="menu-item">

                        <span>${item.name}</span>

                        <span>₹${item.price}</span>

                        <button onclick="addToCart(${item.id})">Add</button>

                    </div>

                `).join("")}

            </div>

        </div>

    `;

}

function addToCart(menuId){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(menuId);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item Added Successfully ✅");

}

loadRestaurant();