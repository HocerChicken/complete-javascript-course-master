'use strict';

///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial); // true
    // console.log(add(2, 3));
    console.log(output); // NEW OUTPUT!
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();
*/

///////////////////////////////////////
// Hoisting and TDZ in Practice

/*
// Variables
console.log(me); // undefine
// console.log(job); // reference error
// console.log(year); // reference error

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // reference error
console.log(addArrow); // undefine
// console.log(addArrow(2, 3)); // reference error

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // undefine
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

///////////////////////////////////////
// The this Keyword in Practice
/*
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear); // 46
  console.log(this); // undefined
};
calcAge(1991); // 46 and undefined

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear); // 57
  console.log(this); // window object
};
calcAgeArrow(1980); // 57 and window object

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // jonas object
    console.log(2037 - this.year); // 46
  },
};
jonas.calcAge(); // jonas object and 46

const matilda = {
  year: 2017,
  calcAge: jonas.calcAge,
};

matilda.calcAge(); // matilda object and 20

const f = jonas.calcAge;
f(jonas); // jonas object and 46
*/

///////////////////////////////////////
// Regular Functions vs. Arrow Functions

/*var firstName = 'Matilda';

const HocPham = {
  fistName: 'Hoc',
  year: 2002,

  calcAge: () => {
    // solution 1
    const self = this; //self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    // solution 2
    // const isMillenial = () => {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    isMillenial();
  },
};

HocPham.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

// primitive and object in practise

let lastName = 'Nguyen';
let oldLastName = lastName;
lastName = 'Pham';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
jessica.lastName = 'Davis';

console.log('Before Married: ', jessica);
console.log('After Married: ', marriedJessica);

// copy objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Davis',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Pham';

console.log('Before Married: ', jessica2);
console.log('After Married: ', jessicaCopy);
// shallow clone (shadow copy)
// => only copy the first level of the object
// => if the object has another object inside, it will not be copied
// deep clone (deep copy)
// => copy all the object inside the object
// => it will be copied
