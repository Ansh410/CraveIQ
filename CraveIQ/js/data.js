// const restaurants = [
// {
//     id:1,
//     name:"Pizza Palace",
//     cuisine:"Italian",
//     category:"Pizza",
//     rating:4.8,
//     delivery:"25 mins",
//     price:299,
//     veg:true,
//     mood:["Happy","Party","Family"],
//     tags:["pizza","cheese","italian","budget"],

//     menu:[
//         {
//             id:1,
//             name:"Margherita Pizza",
//             price:299,
//             veg:true
//         },
//         {
//             id:2,
//             name:"Farmhouse Pizza",
//             price:399,
//             veg:true
//         },
//         {
//             id:3,
//             name:"Garlic Bread",
//             price:149,
//             veg:true
//         },
//         {
//             id:4,
//             name:"Cheese Burst Pizza",
//             price:449,
//             veg:true
//         },
//         {
//             id:5,
//             name:"Cold Drink",
//             price:79,
//             veg:true
//         }
//     ],

//     image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
// },

// {
//     id:2,
//     name:"Burger House",
//     cuisine:"American",
//     category:"Burger",
//     rating:4.5,
//     delivery:"20 mins",
//     price:199,
//     veg:false,
//     mood:["Party","Study"],
//     image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
// },

// {
//     id:3,
//     name:"Biryani Express",
//     cuisine:"Indian",
//     category:"Indian",
// veg:false,
//     rating:4.9,
//     delivery:"30 mins",
//     price:249,
//     mood:["Family","Happy"],
//     image:"https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600"
// },

// {
//     id:4,
//     name:"Healthy Bowl",
//     cuisine:"Healthy",
//     category:"Healthy",
// veg:true,
//     rating:4.7,
//     delivery:"18 mins",
//     price:189,
//     mood:["Gym","Diet"],
//     image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600"
// },

// {
//     id:5,
//     name:"Coffee Corner",
//     cuisine:"Cafe",
//     category:"Cafe",
// veg:true,
//     rating:4.6,
//     delivery:"15 mins",
//     price:149,
//     mood:["Study","Work"],
//     image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
// },

// {
//     id:6,
//     name:"Sushi World",
//     cuisine:"Japanese",
//     category:"Japanese",
// veg:false,
//     rating:4.9,
//     delivery:"35 mins",
//     price:499,
//     mood:["Date","Luxury"],
//     image:"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
// }
// ];



const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian",
    category: "Pizza",
    rating: 4.8,
    delivery: "25 mins",
    price: 299,
    veg: true,
    mood: ["Happy", "Party", "Family"],
    tags: ["pizza", "cheese", "italian", "budget"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    menu: [
      { id: 1, name: "Margherita Pizza", price: 299, veg: true },
      { id: 2, name: "Farmhouse Pizza", price: 399, veg: true },
      { id: 3, name: "Garlic Bread", price: 149, veg: true },
      { id: 4, name: "Cheese Burst Pizza", price: 449, veg: true },
      { id: 5, name: "Cold Drink", price: 79, veg: true }
    ]
  },

  {
    id: 2,
    name: "Burger Junction",
    cuisine: "American",
    category: "Burger",
    rating: 4.5,
    delivery: "20 mins",
    price: 199,
    veg: false,
    mood: ["Hungry", "Quick Bite"],
    tags: ["burger", "fast food", "fries"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    menu: [
      { id: 1, name: "Veg Burger", price: 149, veg: true },
      { id: 2, name: "Chicken Burger", price: 199, veg: false },
      { id: 3, name: "Cheese Fries", price: 129, veg: true },
      { id: 4, name: "Double Patty Burger", price: 249, veg: false },
      { id: 5, name: "Cold Coffee", price: 99, veg: true }
    ]
  },

  {
    id: 3,
    name: "KFC",
    cuisine: "American",
    category: "Fast Food",
    rating: 4.4,
    delivery: "18 mins",
    price: 249,
    veg: false,
    mood: ["Craving", "Movie Night"],
    tags: ["chicken", "fried", "fast food"],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600",
    menu: [
      { id: 1, name: "Chicken Bucket", price: 499, veg: false },
      { id: 2, name: "Zinger Burger", price: 199, veg: false },
      { id: 3, name: "Fries", price: 99, veg: true },
      { id: 4, name: "Popcorn Chicken", price: 149, veg: false },
      { id: 5, name: "Pepsi", price: 79, veg: true }
    ]
  },

  {
    id: 4,
    name: "McDonald's",
    cuisine: "American",
    category: "Burger",
    rating: 4.3,
    delivery: "15 mins",
    price: 179,
    veg: false,
    mood: ["Quick Bite", "Happy"],
    tags: ["burger", "fries", "fast food"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    menu: [
      { id: 1, name: "McVeggie", price: 129, veg: true },
      { id: 2, name: "McChicken", price: 149, veg: false },
      { id: 3, name: "Fries", price: 99, veg: true },
      { id: 4, name: "McSpicy Burger", price: 199, veg: false },
      { id: 5, name: "Coke", price: 79, veg: true }
    ]
  },

  {
    id: 5,
    name: "Subway",
    cuisine: "American",
    category: "Healthy",
    rating: 4.4,
    delivery: "22 mins",
    price: 179,
    veg: true,
    mood: ["Healthy", "Light"],
    tags: ["sandwich", "fresh", "healthy"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
    menu: [
      { id: 1, name: "Veg Sandwich", price: 149, veg: true },
      { id: 2, name: "Chicken Sub", price: 179, veg: false },
      { id: 3, name: "Paneer Sub", price: 159, veg: true },
      { id: 4, name: "Cookies", price: 59, veg: true },
      { id: 5, name: "Cold Drink", price: 79, veg: true }
    ]
  },

  {
    id: 6,
    name: "Domino's",
    cuisine: "Italian",
    category: "Pizza",
    rating: 4.6,
    delivery: "22 mins",
    price: 249,
    veg: false,
    mood: ["Party", "Happy"],
    tags: ["pizza", "cheese", "italian"],
    image: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg",
    menu: [
      { id: 1, name: "Veggie Pizza", price: 249, veg: true },
      { id: 2, name: "Pepperoni Pizza", price: 299, veg: false },
      { id: 3, name: "Garlic Bread", price: 149, veg: true },
      { id: 4, name: "Stuffed Crust Pizza", price: 399, veg: false },
      { id: 5, name: "Pepsi", price: 79, veg: true }
    ]
  },

  {
    id: 7,
    name: "Haldiram",
    cuisine: "Indian",
    category: "Indian",
    rating: 4.7,
    delivery: "30 mins",
    price: 199,
    veg: true,
    mood: ["Family", "Traditional"],
    tags: ["snacks", "indian", "budget"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    menu: [
      { id: 1, name: "Chole Bhature", price: 149, veg: true },
      { id: 2, name: "Raj Kachori", price: 99, veg: true },
      { id: 3, name: "Aloo Tikki", price: 79, veg: true },
      { id: 4, name: "Thali", price: 199, veg: true },
      { id: 5, name: "Lassi", price: 59, veg: true }
    ]
  },

  {
    id: 8,
    name: "Bikanervala",
    cuisine: "Indian",
    category: "Indian",
    rating: 4.5,
    delivery: "28 mins",
    price: 189,
    veg: true,
    mood: ["Family", "Festive"],
    tags: ["sweets", "snacks", "indian"],
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
    menu: [
      { id: 1, name: "Samosa", price: 20, veg: true },
      { id: 2, name: "Kachori", price: 25, veg: true },
      { id: 3, name: "Thali", price: 180, veg: true },
      { id: 4, name: "Gulab Jamun", price: 40, veg: true },
      { id: 5, name: "Lassi", price: 60, veg: true }
    ]
  },

  {
    id: 9,
    name: "Starbucks",
    cuisine: "Cafe",
    category: "Cafe",
    rating: 4.6,
    delivery: "25 mins",
    price: 249,
    veg: true,
    mood: ["Study", "Chill"],
    tags: ["coffee", "cafe", "drinks"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
    menu: [
      { id: 1, name: "Cappuccino", price: 199, veg: true },
      { id: 2, name: "Latte", price: 229, veg: true },
      { id: 3, name: "Cold Coffee", price: 249, veg: true },
      { id: 4, name: "Brownie", price: 149, veg: true },
      { id: 5, name: "Muffin", price: 129, veg: true }
    ]
  },

  {
    id: 10,
    name: "Taco Bell",
    cuisine: "Mexican",
    category: "Fast Food",
    rating: 4.3,
    delivery: "22 mins",
    price: 199,
    veg: false,
    mood: ["Fun", "Party"],
    tags: ["taco", "mexican", "wraps"],
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600",
    menu: [
      { id: 1, name: "Taco", price: 99, veg: false },
      { id: 2, name: "Burrito", price: 199, veg: false },
      { id: 3, name: "Nachos", price: 149, veg: true },
      { id: 4, name: "Quesadilla", price: 179, veg: false },
      { id: 5, name: "Pepsi", price: 79, veg: true }
    ]
  },

  {
    id: 11,
    name: "Wow! Momo",
    cuisine: "Chinese",
    category: "Momos",
    rating: 4.4,
    delivery: "18 mins",
    price: 129,
    veg: true,
    mood: ["Craving", "Snack"],
    tags: ["momos", "chinese", "street food"],
    image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
    menu: [
      { id: 1, name: "Veg Momos", price: 99, veg: true },
      { id: 2, name: "Fried Momos", price: 129, veg: true },
      { id: 3, name: "Chicken Momos", price: 149, veg: false },
      { id: 4, name: "Soup", price: 79, veg: true },
      { id: 5, name: "Noodles", price: 149, veg: true }
    ]
  },

  {
    id: 12,
    name: "Barbeque Nation",
    cuisine: "Indian",
    category: "BBQ",
    rating: 4.7,
    delivery: "45 mins",
    price: 599,
    veg: false,
    mood: ["Party", "Celebration"],
    tags: ["bbq", "buffet", "grill"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600",
    menu: [
      { id: 1, name: "Grilled Chicken", price: 399, veg: false },
      { id: 2, name: "Paneer Tikka", price: 299, veg: true },
      { id: 3, name: "Salad", price: 99, veg: true },
      { id: 4, name: "Biryani", price: 299, veg: false },
      { id: 5, name: "Dessert", price: 149, veg: true }
    ]
  },

  {
    id: 13,
    name: "Sagar Ratna",
    cuisine: "Indian",
    category: "South Indian",
    rating: 4.5,
    delivery: "30 mins",
    price: 179,
    veg: true,
    mood: ["Morning", "Light"],
    tags: ["dosa", "idli", "south indian"],
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600",
    menu: [
      { id: 1, name: "Masala Dosa", price: 120, veg: true },
      { id: 2, name: "Idli Sambar", price: 99, veg: true },
      { id: 3, name: "Uttapam", price: 130, veg: true },
      { id: 4, name: "Vada", price: 80, veg: true },
      { id: 5, name: "Filter Coffee", price: 60, veg: true }
    ]
  },

  {
    id: 14,
    name: "Behrouz Biryani",
    cuisine: "Indian",
    category: "Biryani",
    rating: 4.6,
    delivery: "35 mins",
    price: 299,
    veg: false,
    mood: ["Craving", "Royal"],
    tags: ["biryani", "rice", "royal"],
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    menu: [
      { id: 1, name: "Chicken Biryani", price: 299, veg: false },
      { id: 2, name: "Veg Biryani", price: 249, veg: true },
      { id: 3, name: "Raita", price: 49, veg: true },
      { id: 4, name: "Salad", price: 59, veg: true },
      { id: 5, name: "Gulab Jamun", price: 60, veg: true }
    ]
  },

  {
    id: 15,
    name: "La Pino'z Pizza",
    cuisine: "Italian",
    category: "Pizza",
    rating: 4.4,
    delivery: "26 mins",
    price: 249,
    veg: false,
    mood: ["Party", "Cheat Day"],
    tags: ["pizza", "loaded", "italian"],
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600",
    menu: [
      { id: 1, name: "Cheese Burst Pizza", price: 249, veg: true },
      { id: 2, name: "Tandoori Pizza", price: 279, veg: false },
      { id: 3, name: "Garlic Bread", price: 129, veg: true },
      { id: 4, name: "Pasta", price: 199, veg: true },
      { id: 5, name: "Cold Drink", price: 79, veg: true }
    ]
  },

  {
    id: 16,
    name: "Oven Story",
    cuisine: "Italian",
    category: "Pizza",
    rating: 4.3,
    delivery: "24 mins",
    price: 269,
    veg: false,
    mood: ["Netflix", "Party"],
    tags: ["pizza", "cheese", "italian"],
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600",
    menu: [
      { id: 1, name: "Farmhouse Pizza", price: 269, veg: true },
      { id: 2, name: "Chicken Delight", price: 299, veg: false },
      { id: 3, name: "Garlic Bread", price: 129, veg: true },
      { id: 4, name: "Brownie", price: 99, veg: true },
      { id: 5, name: "Cold Coffee", price: 149, veg: true }
    ]
  },

  {
    id: 17,
    name: "Cafe Coffee Day",
    cuisine: "Cafe",
    category: "Cafe",
    rating: 4.2,
    delivery: "20 mins",
    price: 149,
    veg: true,
    mood: ["Study", "Chill"],
    tags: ["coffee", "cafe", "snacks"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600",
    menu: [
      { id: 1, name: "Espresso", price: 99, veg: true },
      { id: 2, name: "Cold Coffee", price: 149, veg: true },
      { id: 3, name: "Sandwich", price: 129, veg: true },
      { id: 4, name: "Brownie", price: 99, veg: true },
      { id: 5, name: "Tea", price: 49, veg: true }
    ]
  },

  {
    id: 18,
    name: "Chinese Wok",
    cuisine: "Chinese",
    category: "Asian",
    rating: 4.3,
    delivery: "22 mins",
    price: 199,
    veg: false,
    mood: ["Craving", "Dinner"],
    tags: ["noodles", "chinese", "asian"],
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600",
    menu: [
      { id: 1, name: "Hakka Noodles", price: 149, veg: true },
      { id: 2, name: "Chilli Chicken", price: 199, veg: false },
      { id: 3, name: "Fried Rice", price: 149, veg: true },
      { id: 4, name: "Spring Rolls", price: 99, veg: true },
      { id: 5, name: "Soup", price: 79, veg: true }
    ]
  },

  {
    id: 19,
    name: "EatFit",
    cuisine: "Healthy",
    category: "Healthy",
    rating: 4.5,
    delivery: "25 mins",
    price: 219,
    veg: true,
    mood: ["Fitness", "Healthy"],
    tags: ["protein", "salad", "healthy"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
    menu: [
      { id: 1, name: "Protein Bowl", price: 219, veg: true },
      { id: 2, name: "Salad Bowl", price: 179, veg: true },
      { id: 3, name: "Smoothie", price: 129, veg: true },
      { id: 4, name: "Oats Bowl", price: 99, veg: true },
      { id: 5, name: "Juice", price: 79, veg: true }
    ]
  },

  {
    id: 20,
    name: "The Good Bowl",
    cuisine: "Indian",
    category: "Bowl",
    rating: 4.4,
    delivery: "28 mins",
    price: 199,
    veg: false,
    mood: ["Comfort", "Dinner"],
    tags: ["bowl", "rice", "comfort food"],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    menu: [
      { id: 1, name: "Butter Chicken Bowl", price: 199, veg: false },
      { id: 2, name: "Rajma Rice Bowl", price: 149, veg: true },
      { id: 3, name: "Dal Rice", price: 129, veg: true },
      { id: 4, name: "Paneer Bowl", price: 179, veg: true },
      { id: 5, name: "Lassi", price: 59, veg: true }
    ]
  }
];

// export default restaurants;