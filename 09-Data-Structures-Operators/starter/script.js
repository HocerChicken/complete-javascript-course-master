'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
/*
// Destructuring Array
const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];

let [x, y, z] = arr;
let [first, , third] = arr; // [1, 3]
console.log('🚀 ~ first, , third:', first, third);
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3]

let [main, secondary] = restaurant.categories;
console.log(main, secondary); // Italian Pizzeria

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Pizzeria Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Italian Pizzeria

// Nested destructuring
const nested = [2, 3, [4, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 4 6

// Default Values
const [r = 1, q = 1, p = 1] = [8];
console.log(r, q, p); // 8 1 1
*/

/////////////////////////////////////////////////////
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Default Values
const { menu = [], starterMenu: starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

// Mutating Variables
let a = 111;
let b = 0;

const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

//nested Objects
const {sat} = openingHours;