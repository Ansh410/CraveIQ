// -----------------------------
// Nutrition Database
// -----------------------------

const nutrition = {

    "Protein Bowl": { protein: 34, calories: 430 },

    "Paneer Bowl": { protein: 26, calories: 390 },

    "Chicken Burger": { protein: 28, calories: 520 },

    "Chicken Sub": { protein: 30, calories: 420 },

    "Paneer Sub": { protein: 24, calories: 370 },

    "Grilled Chicken": { protein: 42, calories: 470 },

    "Paneer Tikka": { protein: 27, calories: 360 },

    "Butter Chicken Bowl": { protein: 32, calories: 510 },

    "Chicken Biryani": { protein: 30, calories: 650 },

    "Veg Biryani": { protein: 12, calories: 540 },

    "McChicken": { protein: 25, calories: 480 },

    "Zinger Burger": { protein: 29, calories: 540 },

    "Chicken Momos": { protein: 23, calories: 350 },

    "Chilli Chicken": { protein: 31, calories: 450 }

};


// -----------------------------
// Button
// -----------------------------

const button = document.getElementById("generateBtn");

button.addEventListener("click", generateMeal);


// -----------------------------
// Main Function
// -----------------------------

function generateMeal() {

    const budget = Number(document.getElementById("budget").value);

    const goal = document.getElementById("goal").value;

    const preference = document.getElementById("preference").value;

    if (!budget || budget <= 0) {

        alert("Please enter a valid budget.");

        return;

    }

    let meals = [];


    restaurants.forEach((restaurant) => {

        restaurant.menu.forEach((item) => {

            // Budget filter
            if (item.price > budget) return;

            // Veg / Non Veg filter
            if (preference === "veg" && !item.veg) return;

            if (preference === "nonveg" && item.veg) return;


            // Nutrition lookup

            const data = nutrition[item.name] || {

                protein: item.veg ? 12 : 22,

                calories: item.price * 2

            };


            meals.push({

                restaurant: restaurant.name,

                image: restaurant.image,

                rating: restaurant.rating,

                meal: item.name,

                price: item.price,

                protein: data.protein,

                calories: data.calories

            });

        });

    });


    if (meals.length === 0) {

        document.getElementById("resultCard").innerHTML = `

            <div class="empty">

                <h2>No Meal Found 😔</h2>

                <p>Increase your budget or change the filters.</p>

            </div>

        `;

        return;

    }


    // Sort

    if (goal === "protein") {

        meals.sort((a, b) => b.protein - a.protein);

    }

    else {

        meals.sort((a, b) => a.price - b.price);

    }


    displayMeal(meals[0]);

}



// -----------------------------
// Display
// -----------------------------

function displayMeal(meal) {

    document.getElementById("resultCard").innerHTML = `

<img src="${meal.image}">

<h2 class="restaurant-name">

${meal.restaurant}

⭐ ${meal.rating}

</h2>

<h3 class="meal">

🍽 ${meal.meal}

</h3>


<div class="info">

<div>

<h3>Price</h3>

₹${meal.price}

</div>

<div>

<h3>Protein</h3>

${meal.protein} g

</div>

<div>

<h3>Calories</h3>

${meal.calories}

</div>

<div>

<h3>Budget Left</h3>

₹${Number(document.getElementById("budget").value)-meal.price}

</div>

</div>


<div class="reason">

<h3>🤖 CraveIQ AI Recommendation</h3>

<p>

This meal was selected because it matches your budget and

offers the best

<b>${document.getElementById("goal").value=="protein"?"protein content":"value for money"}</b>

among all available restaurants.

</p>

</div>

`;

}