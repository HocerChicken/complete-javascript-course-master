'use strict';

// How passing arguments works: Value vs. reference
// Passing by value (primitive types) - copy of the value is passed to the function (not the original value)
// - so the original value is not changed by the function
// Passing by reference (objects) - reference to the object is passed to the function (not the original object)
// - so the original object can be changed by the function
/*
const flight = 'LH234';
const hocPam = {
  passport: 1123123,
  name: 'Hoc Pham',
};

function checkIn(flightNum, passenger) {
  flightNum = 'AK047';
  if (passenger.passport === 1123123) {
    alert('Passed');
  } else {
    alert('Not passed');
  }
}
checkIn(flight, hocPam);

// is the same as
const flightNum = flight;
const passenger = hocPam;
*/

////////////////////////////////////////////////////////
// First-class and higher-order functions
// First-class functions:
// - functions are treated as first-class citizens (values)
// - that means functions are simply values
// - Functions are just another "type" of object
// Higher-order functions:
// - functions that receive another function as an argument, that return a new function, or both
// - this is possible because of first-class functions
// - this is a feature of functional programming
// 2 ways of higher-order functions:
// - functions that receive another function as an argument
const greet = () => {
  console.log('Hello World!!!');
};
// btnOpen.addEventListener('click', greet);

// - functions that return a new function
const count = () => {
  let counter = 0;
  return function () {
    counter++;
  };
};
const increment = count();
increment();
increment();

// callback function: a function that is passed to another function as an argument
// - and is executed inside that function
// - this is a practical example of higher-order functions
const oneWord = str => {
  return str.replace(/ /g, '').toUpperCase();
};

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

// funtion that returns a function
const greeting = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greeting('Hello')('Hoc');

////////////////////////////////////////////////////////
// call, apply, and bind methods
////
// call method - allows us to set the 'this' keyword to whatever we want (the first argument)
// - and then we can call the function with the arguments that we want to pass to it
// - this is called method borrowing (borrowing a method from another object)
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = function (flightNum, name) {
  console.log(
    `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
};

book.call(eurowings, 23, 'Hoc Pham');
console.log(eurowings.bookings);

const lufthansa = { airline: 'Lufthansa', iataCode: 'LH', bookings: [] };
book.call(lufthansa, 239, 'Hoc Pham');
console.log(lufthansa.bookings);

// apply method - similar to call method, but it does not receive a list of arguments after the 'this' keyword
// - instead, it takes an array of arguments
const flightData = [583, 'Hoc Pham'];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);

// bind methods
const TanSonNhat = { airline: 'TanSonNhat', iataCode: 'VN', bookings: [] };
TanSonNhat.planes = 300;
TanSonNhat.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

const buyPlane = TanSonNhat.buyPlane;
//buyPlane(); // this keyword is undefined
// because the 'this' keyword is set to undefined because it is a regular function call (not a method call)
// to fix this, we can use the bind method
const buyPlaneBind = TanSonNhat.buyPlane.bind(TanSonNhat);
buyPlaneBind();
buyPlaneBind();

// Note with the bind method: in addEventListener,
// the 'this' keyword is set to the element that the event handler is attached to
// Partial application: a part of the arguments of a function are already applied
const addTax = (rate, value) => value + value * rate;
const addVAT = addTax.bind(null, 0.25);
console.log(addTax(0.2, 100));
console.log(addVAT(100));

///////////////////////////////////////
// Coding Challenge #1
/*

Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let answer = prompt(
      `${this.question} \n ${this.options.join('\n')} \n (Write option number)`
    );
    answer = Number(answer);
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const pollBtn = $('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/
// IIFE (Immediately Invoked Function Expression)
// - a function that is executed right after it is created
(function () {
  console.log('This will never run again');
})();

// Closures
// - a function has access to the variable environment of the execution context in which it was created
// - even after that execution context is gone

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Example #1
let f;
const g = function () {
  const a = 21;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

// Re-assigning f function
const h = function () {
  const b = 23;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

// Example #2
const boardPassengers = function (n, wait) {
  // const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
console.log(document.body);
