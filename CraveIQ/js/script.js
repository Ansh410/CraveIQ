// // Script for basic animations and interactivity

// document.addEventListener('DOMContentLoaded', function () {

//     const searchInput = document.querySelector('main input');

//     if (searchInput) {

//         searchInput.addEventListener('focus', function () {
//             searchInput.style.width = '650px';
//             searchInput.style.transition = 'width 0.5s ease';
//         });

//         searchInput.addEventListener('blur', function () {
//             searchInput.style.width = '600px';
//         });

//     }

// });
// // ==========================
// // Display Restaurants
// // ==========================

// const container = document.getElementById("restaurant-container");

// function displayRestaurants(data) {

//     container.innerHTML = "";

//     data.forEach(function (restaurant) {

//         container.innerHTML += `

//         <div class="restaurant-card" onclick="openRestaurant(${restaurant.id})">

//             <img src="${restaurant.image}" alt="${restaurant.name}">

//             <div class="restaurant-info">

//                 <h3>${restaurant.name}</h3>

//                 <p>🍽 ${restaurant.cuisine}</p>
// <p>🏷 ${restaurant.category}</p>
// <p>${restaurant.veg ? "🟢 Veg" : "🔴 Non-Veg"}</p>

//                 <p>⭐ ${restaurant.rating}</p>

//                 <p>🚚 ${restaurant.delivery}</p>

//                 <p>₹${restaurant.price} for one</p>

//                 <button>Add to Cart</button>

//             </div>

//         </div>

//         `;

//     });

// }

// if (container) {
//     displayRestaurants(restaurants);
// }


// // new
// // ==========================
// // Live Search
// // ==========================

// const searchBox = document.getElementById("search");

// if (searchBox) {

//     searchBox.addEventListener("keyup", function () {

//         const searchValue = searchBox.value.toLowerCase();

//         const filteredRestaurants = restaurants.filter(function (restaurant) {

//             return (
//                 restaurant.name.toLowerCase().includes(searchValue) ||
//                 restaurant.cuisine.toLowerCase().includes(searchValue)
//             );

//         });

//         displayRestaurants(filteredRestaurants);

//     });

// }

// // new2 
// // ==========================
// // Mood Filter
// // ==========================
// const moodButtons = document.querySelectorAll(".mood-buttons button");

// if (moodButtons.length > 0) {

//     moodButtons.forEach(function(button){

//         button.addEventListener("click", function(){

//             const mood = this.dataset.mood;

//             if(mood === "All"){
//                 displayRestaurants(restaurants);
//                 return;
//             }

//             const filteredRestaurants = restaurants.filter(function(restaurant){
//                 return restaurant.mood.includes(mood);
//             });

//             displayRestaurants(filteredRestaurants);

//         });

//     });

// }

// // new 3
// // ==========================
// // Category Filter
// // ==========================

// const categoryButtons = document.querySelectorAll(".category-buttons button");

// if (categoryButtons.length > 0) {

//     categoryButtons.forEach(function(button){

//         button.addEventListener("click", function(){

//             const category = this.dataset.category;

//             if(category === "All"){
//                 displayRestaurants(restaurants);
//                 return;
//             }

//             const filtered = restaurants.filter(function(restaurant){

//                 return restaurant.category === category;

//             });

//             displayRestaurants(filtered);

//         });

//     });

// }

// // new4 
// // Open Restaurant

// function openRestaurant(id){

//     localStorage.setItem("restaurantId",id);

//     window.location.href="restaurant.html";

// }

// // new5
// // ===========================
// // Restaurant Details
// // ===========================

// function loadRestaurant(){

//     const restaurantId = Number(localStorage.getItem("restaurantId"));

//     if(!restaurantId) return;

//     const restaurant = restaurants.find(function(item){

//         return item.id === restaurantId;

//     });

//     if(!restaurant) return;

//     const container = document.getElementById("restaurant-details");

//     if(!container) return;

//     container.innerHTML = `

//         <div class="restaurant-page">

//             <img src="${restaurant.image}" class="restaurant-banner">

//             <h1>${restaurant.name}</h1>

//             <p>⭐ ${restaurant.rating}</p>

//             <p>🍽 ${restaurant.cuisine}</p>

//             <p>🚚 ${restaurant.delivery}</p>

//             <p>₹${restaurant.price} for one</p>

//             <h2>Menu</h2>

//             <div class="menu-list">

//                 ${restaurant.menu.map(item=>`

//                     <div class="menu-item">

//                         <span>${item.name}</span>

//                         <span>₹${item.price}</span>

//                         <button>Add</button>

//                     </div>

//                 `).join("")}

//             </div>

//         </div>

//     `;

// }

// loadRestaurant();