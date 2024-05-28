'use strict';
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

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (...Ingredients) {
    // const ingredients = [...Ingredients];
    console.log(...Ingredients);
  },
};
/*
/////////////////////////////////////////////////////
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
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Default Values
const { menu = [], starterMenu: starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

// Mutating Variables
let a = 111;
let b = 0;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested Objects
const { sat } = openingHours;
console.log(sat);
const {
  sat: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({ address: 'Ho Chi Minh City' });
*/

/////////////////////////////////////////////////////
/*
// the spread operator
// spread operator is used to build new arrays or to pass multiple values into a function or method that accepts multiple parameters
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(badNewArr);
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

console.log(newMenu);
console.log(restaurant.mainMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log('🚀 ~ mainMenuCopy:', mainMenuCopy);

// join 2 arrays
const menuJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('🚀 ~ menuJoin:', menuJoin);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Hoang';
const letters = [...str, ' ', 'Hy'];

const ingredients = [
  prompt('Ingredient 1: '),
  prompt('Ingredient 2: '),
  prompt('Ingredient 3: '),
];

restaurant.orderPasta(...ingredients); // Here is your delicious pasta with Ingredients <1>, <2>, <3>
// the spread operator in objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Hoang' };
*/

////////////////////////////////////////////
// Rest pattern and parameters
// Rest pattern and parameters are almost the same as the spread operator,
// but the rest pattern is used to collect multiple elements and pack them into an array or object.
// rest parameters are used to pack elements into an array or object.
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

// get the pizza risoto

const [pizza, , risoto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risoto, otherFoods);

// Objects
const { sat, ...weeksdays } = restaurant.openingHours;
console.log(weeksdays);

// Functions
const add = function (...numbers) {
  let sum = 0;for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/

///////////////////////////////////////////
// Short-circuiting (&& and ||)
// Short-circuiting is a way to write a conditional statement in a shorter way. It is used to simplify the code.
// Use any data type, return any data type, short-circuiting
// && operator returns the first falsy value or the last value if all of them are truthy
// || operator returns the first truthy value or the last value if all of them are falsy
/*
console.log('---OR---');
console.log(3 || 'Hoang'); // 3
console.log('' || 'Hoang'); // Hoang
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || null || 0 || null || 'Hoang'); // Hoang

restaurant.numbersOfGirls = parseInt(1);

const beGirlfriend = restaurant.numbersOfGirls || NaN || 'Hoang';
const guest = restaurant.numbersOfGirls ? restaurant.numbersOfGirls : NaN;
console.log('log ~ guest:', guest);
console.log('log ~ beGirlfriend:', beGirlfriend);

console.log('---AND---');
console.log(3 && 'Hoang'); // 'Hoang'
console.log('' && 'Hoang'); // ''

/////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??)
// The nullish coalescing operator is used to check if a value is null or undefined.
// If the value is null or undefined, the operator returns the right-hand side value.

const nullVal = null;
const undefinedVal = undefined;

console.log(nullVal ?? 'nullVal is null or undefined'); // nullVal is null or undefined
console.log(undefinedVal ?? 'undefinedVal is null or undefined'); // undefinedVal is null or undefined
const falseValue = false; // false
const zero = 0; // 0
const emptyString = ''; // ''
const notANumber = NaN; // NaN

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'tomato');
*/

////////////////////////////////////////////
// Logical Assignment Operators
// Logical assignment operators are used to assign a value to a variable based on a condition.

// Logical OR (||) assignment
// The logical OR (||) assignment operator is used to assign a value to a variable if it is falsy.

// Logical AND (&&) assignment
// The logical AND (&&) assignment operator is used to assign a value to a variable if it is truthy.

// Logical nullish assignment
// The logical nullish assignment operator is used to assign a value to a variable if it is null or undefined.
/*
let a = 10;
let b = 20;
let c = 30;

a ||= 50;
b &&= 50;
c ??= 50;

console.log(a, b, c);
*/

/////////////////////////////////////////////
// Nullish: null and undefined (NOT 0 or '')
// Nullish Coalescing Operator (??) -> only nullish values (null and undefined)
/*

console.log('log ~ b:', b);
*/
// restaurant.numGuests = 0;
/*
const guestCorrect = restaurant.numGuests ?? '10';
console.log('log ~ guestCorrect:', guestCorrect);

const rest1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  numGuest: 0,
};

const rest2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
};
rest1.numGuest ||= 'Hoc';
rest1.numGuest ??= 10;

console.log('--rest1--', rest1.numGuest);
console.log('--rest2--', rest2.numGuest);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') 
with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. 
So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀*/
/*
//1
const players1 = [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
];
const players2 = [
  'Ter Stegen',
  'Pique',
  'Lenglet',
  'Alba',
  'Sergio',
  'Busquets',
  'De Jong',
  'Coutinho',
  'Suarez',
  'Messi',
  'Dembele',
];

// 2. The first player in any player array is the goalkeeper and the others are field players.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers')
// with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log('log ~ allPlayers:', allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'perisic'];
console.log('log ~ players1Final:', players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`the numbers of ${players.length} goals has been scored!!`);
};

printGoals('a', 'b', 'c');
printGoals('a', 'b');
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('team 1 win');
team1 > team2 && console.log('team 2 win');
team1 === team2 && console.log('two team draw');
*/
/////////////////////////////////////////////
// for of loop
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu.entries()) {
  console.log(item);
}

for (const [key, value] of menu.entries()) {
  console.log(`${key + 1}: ${value}`);
}
/*

//console.log([...menu.entries()])

/////////////////////////////////////////////
// enhanced object literals (ES6)
// ES6
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //#2 ES6 enhanced object literals (ES6) -> key and value are the same
  open() {
    console.log('We are open');
  },
  // ES6 enhanced object literals (ES6) -> key and value are the same
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
*/

/////////////////////////////////////////////
// optional chaining (?.)
/*
// props
console.log(restaurant.openingHours.mon?.open); // undefined
// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // Method does not exist
// arrays
const arr = [];
console.log(arr[0]?.name ?? 'user array is empty'); // user array is empty

/////////////////////////////////////////////
// looping objects: object keys, values, and entries
const openingHours = restaurant.openingHours;

// Property names
console.log(Object.keys(openingHours));

// values of the object
console.log(Object.values(openingHours));

// entries of the object
console.log(Object.entries(openingHours));
*/
///////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd 
and log it to the console (We already studied how to calculate averages, 
you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, 
don't hardcode them (except for "draw"). HINT: Note how the odds 
and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

// #1 Loop over the game.scored array and print each player name to the console
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${el}`);
}

// #2 2. Use a loop to calculate the average odd
// and log it to the console (We already studied how to calculate averages,
// you can go check if you don't remember)

const odds = Object.values(game.odds);

let sum = 0;
for (const score of odds) {
  sum += score;
}
console.log('Average ' + sum / odds.length);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object,
//don't hardcode them (except for "draw"). HINT: Note how the odds
//and the game objects have the same property names 😉
const scorePlayers = game.scored;
const obj = {};
for (const value of scorePlayers) {
  obj[value] ? obj[value]++ : (obj[value] = 1);
}
console.log(obj)
*/

/////////////////////////////////////////////
// Sets (ES6)
// -> collection of unique values (no duplicates)
// -> iterable -> can store any type of values
// -> can be used to remove duplicates from arrays
/*
// initialize set with new keyword
const orderSet = new Set([
  'Coca Cola',
  'Pepsi',
  'Pepsi',
  'Coca Cola',
  'Coca Cola',
  'Sprite',
]);
console.log('log ~ orderSet:', orderSet);
// get the size of the set
console.log(orderSet.size);
// add new element to the set
orderSet.add('Fanta');
orderSet.add('Fanta');
console.log('log ~ orderSet:', orderSet);
// delete element from the set
orderSet.delete('Pepsi');
console.log('log ~ orderSet:', orderSet);
// clear element from the set
orderSet.clear();
console.log('log ~ orderSet:', orderSet);

// get the values of the set
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
*/

/////////////////////////////////////////////
// Maps: Fundamentals (ES6) -> key-value pairs (object)
// -> keys can have any type of values (string, number, object, function, array)
// -> iterable -> can store any type of values
/*
// initialize map with new keyword
const rest = new Map();
// set key-value pairs
rest.set('name', "Pham Thai Hoc")
rest.set(1, "Ho Chi Minh City")
rest.set(3.5, "5 stars")
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// get the value of the key
rest.get('name')
console.log("log ~ rest.get('name'):", rest.get('name'))
// check if the key is existed
console.log(rest.has('categories')) // true
// delete the key-value pair
rest.delete(1)
console.log(rest)
// get the size of the map
console.log(rest.size)
// clear the map
rest.clear()

// initialize map with array
rest.set([1,2], 'Test') // key is array [1,2] -> not the same as [1,2] in the memory 
const arrMap = [1,2]
rest.set(arrMap, 'Test') // key is array [1,2] -> the same as [1,2] in the memory
console.log(rest.get([1,2])) // undefined
console.log(rest.get(arrMap)) // Test
console.log(rest)
*/
// Maps: Iteration (ES6)
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

// Convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////////////////////
// Coding Challenge

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that 
the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: 
"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console,
marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// #1 Create an array 'events' of the different game events that happened (no duplicates)
const noDuplicateEvents = new Set(gameEvents.values());
const events = [...noDuplicateEvents];
console.log('log ~ events:', events);

// #2 After the game has finished, is was found that
// the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log('log ~ gameEvents:', gameEvents);

// #3 Print the following string to the console:
// "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// #4 Loop over the events and log them to the console,
//marking whether it's in the first half or second half (after 45 min) of the game, like this:
//      [FIRST HALF] 17: ⚽️ GOAL
for (let [key, value] of gameEvents) {
  key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
}
*/

/////////////////////////////////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]); // T
console.log(airline.length); // 16
console.log(airline.indexOf('A')); // 1
console.log(airline.lastIndexOf('A')); // 4

console.log(airline.indexOf('Portugal')); // 8
console.log(airline.slice(8)); // Portugal

console.log(airline.slice(-1));

function checkMiddleSeats(seat) {
  const s = seat.slice(-1);
  s === 'B' || s === 'E'
    ? console.log('You got the middle seat')
    : console.log('You got lucky');
}

checkMiddleSeats('11B');
checkMiddleSeats('11C');
checkMiddleSeats('11E');

const HocName = 'Pham Thai Hoc';
console.log(HocName.toLowerCase()); // pham thai hoc
console.log(HocName.toUpperCase()); // PHAM THAI HOC

// Fix capitalization in name
const passenger = 'phaM ThAI HOc';
const passengerLow = passenger.toLowerCase();
const passengerCorrect = passengerLow[0].toUpperCase() + passengerLow.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hocpam@gmail.com';
const loginEmail = 'HOCpam@gmail.com   \n';
const emailCorrect = loginEmail.toLowerCase().trim();
console.log(emailCorrect);
console.log(email === emailCorrect);

// replace
const priceUSD = '288,97$';
const priceVND = priceUSD.replace('$', ' VND').replace(',', '.');
console.log('log ~ priceVND:', priceVND);
// replaceAll

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
//console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.startsWith('Airb')); // true

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practise exercise

const checkBaggage = function (str) {
  const items = str.toLowerCase();

  if (items.includes('gun') || items.includes('knife')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some food and a pocket');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split and join
console.log('outside+hoc+is+a+bad+boy'.split('+'));
console.log(['but', 'he', 'is', 'good'].join(' '));

const [firstName, lastName] = 'Hoc Pham'.split(' ');
console.log('log ~ lastName:', lastName);
console.log('log ~ firstName:', firstName);

// split to name array and for each name capitalize the first letter

const capitalizeName = function (name) {
  const nameSplit = name.split(' ');
  for (let i = 0; i < nameSplit.length; i++) {
    nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);
  }
  return nameSplit.join(' ');
};

let passengerName = 'nguyen nan a'; // Change the value of passengerName here
let passengerName2 = 'nguyen van b'; // Change the value of passengerName2 here
passengerName = capitalizeName(passengerName);
passengerName2 = capitalizeName(passengerName2);
console.log(passengerName);
console.log(passengerName2);

// padding
const message = 'Go to gate 23!!!';
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++Go to gate 23!!!+++++++++

const maskPassword = function (password) {
  const last = '';
  return last.padStart(password.length, '*');
};

console.log(maskPassword('123456789'));
// repeat
console.log('I Love you so much!!!\n'.repeat(3000));
*/

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  let texts = document.querySelector('textarea').value;
  let count = 0;
  texts = texts.trim().split('\n');
  for (let text of texts) {
    const [first, second] = text.toLowerCase().trim().split('_');
    const output = first + second.replace(second[0], second[0].toUpperCase());
    console.log(output.padEnd(20, ' ') + '✅'.repeat(count + 1));
    count++;
  }
});*/

/////////////////////////////////////////////
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [place, from, to, time] = flight.split(';');
  const output = `${
    place.includes('Delayed')
      ? '🔴' + place.replaceAll('_', ' ')
      : '' + place.replaceAll('_', ' ')
  } from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(46));
}
