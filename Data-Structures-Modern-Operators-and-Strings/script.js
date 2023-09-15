'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22.30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});




// Destructuring Arrays 
// []
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);

// Switsching variables
// const temp = main;
// main = secondary;
// secondary = temp;
//console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// API Variables Important !!!
// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);



// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// []

// The Spread Operator (...)
const arr = [7, 8, 9]; 
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; 
console.log(badNewArr);

const newArr = [1, 2, ...arr]; 
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; 
console.log(newMenu);

// Destructuring Assignment &&  The Spread Operator (...) !!!!

// Copy array 
const mainMenuCopy =  [...restaurant.mainMenu]; 

// Join 2 arrays 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; 
console.log(menu);

// Iterables: array, strings, maps, sets. NOT objects 
const str = 'Jonas'; 
const letters = [...str, '', 'S.']; 
console.log(letters);
console.log(...str);
console.log(`${...str} Scmedtmann`); 



//Real-world example 
const ingredients = [
  prompt ("Let's make pasta! Ingredient 1?"), 
  prompt ('Ingredient 2?'), 
  prompt ('Ingredient 3?'),
]; 
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); 
restaurant.orderPasta(...ingredients); 

//Object 
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guippse'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; 
restaurantCopy.name = 'Ristorante Roma'; 
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of = 
const arr = [1, 2, ...[3,4]];

// REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5]; 
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu,
]; 

console.log(pizza, risotto, otherFood);

// Objects 
const {sat, ...weekdays } = restaurant.openingHours; 
console.log(weekdays);

// 2) Functions 
const add = function (...numbers) { 
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) sum += numbers [i];
  console.log(sum);
};

add(2,3); 
add (5, 3, 7, 2); 
add (8, 2, 5, 3, 2, 1, 4); 

const x = [23, 5, 7]; 
add(...x); 

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); 
restaurant.orderPizza('mushrooms'); 

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('----- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas' );
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' 'Hello' || 23 || null);

restaurant.numGuests = 23; 
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10; 
console.log(guest1);

const guest2 = restaurant.numGuests || 10; 
console.log(guest2);

console.log('-----AND-----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example 
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza ('mushrooms', 'spinach'); 

// The Nullish Coalescing Operator (??) 

restaurant.numGuest = 0; 
const guest = restaurant.numGuest || 10; 
console.log(guests);

// Nullish: null and undefined (NOT 0 or ''): 
const guestCorrect = restaurant.numGuest ?? 10; 
console.log(guestCorrect);