'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////

// Silce() method => returns a new array containing
 the extracted elements, don't change the original array
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(0, 1)); // ['a']
console.log(arr.slide(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']

// splice() method => mutates the original array
let arrToSplice = ['a', 'b', 'c', 'd', 'e'];
console.log(arrToSplice.splice(2)); // ['c', 'd', 'e']

// reverse() method => mutates the original array, 
reverse the array elements order
let arrReverse = ['e', 'd', 'c', 'b', 'a'];
console.log(arrReverse.reverse()); // ['a', 'b', 'c', 'd', 'e']

// concat() method => merge two or more arrays, returns a new array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]
console.log([...arr1, ...arr2]); // [1, 2, 3, 4, 5, 6]

// join() method => join all elements of an array into a string
const arrToJoin = ['I', 'love', 'coding'];
console.log(arrToJoin.join('-')); // I-love-coding

////////////////////////////////
// get last element of array
const arrToGetLast = [1, 2, 3, 4, 5, 6];
console.log(arrToGetLast[arrToGetLast.length - 1]);
console.log(arrToGetLast.slide(-1)[0]); 
console.log(arrToGetLast.at(-1));

////////////////////////////////
// Looping arrays: forEach
const movementsTocheck = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movementsTocheck.entries()) {
  if (movement > 0) {
    console.log('Movement ' + i + ' You deposited ' + movement);
  } else {
    console.log('Movement' + i + ' You withdrew ' + Math.abs(movement));
  }
}

// The difference between for-of and forEach is that
// - for-of loops support both break and continue statements.
// - forEach() does not support break or continue, but you can use return to skip iterations and exceptions to break out of the loop
movementsTocheck.forEach(function (movement, i) {
  if (movement > 0) {
    console.log('Movement ' + i + ' You deposited ' + movement);
  } else {
    console.log('Movement' + i + ' You withdrew ' + Math.abs(movement));
  }
});

////////////////////////////////
// forEach with maps and sets
// Map
const currenciesMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currenciesMap.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesSet = new Set(['USD', 'EUR', 'GPB']);
currenciesSet.forEach(function (value, _, map) {
  console.log(`${value}: ${_}`);
});
*/
const displayMovements = moments => {
  containerMovements.innerHTML = '';
  moments.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}💶</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const movementsSum = movements.reduce((acc, mov) => acc + mov, 0);
console.log('log ~ movementsSum:', movementsSum);
labelBalance.innerHTML = movementsSum + ' EUR';

const displayCalculateSummary = movements => {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = incomes + '💶';
  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = Math.abs(outcomes) + '💶';
  const interest = movements
    .filter(mov => mov > 0)
    .map(mov => (mov * 1.2) / 100)
    .filter(mov => {
      return mov > 1;
    })
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);

  labelSumInterest.textContent = interest + '💶';
};
displayCalculateSummary(movements);
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const Kate = [10, 5, 6, 1, 4]; // array age of dogs
// const Julia = [4, 1, 15, 8, 3]; // array age of dogs

// function myCheckDogs(dogsJulia, dogsKate) {
//   const JuliaCopy = dogsJulia.slice();
//   const dogsJuila = JuliaCopy.splice(1, 2);
//   const dogsArr = dogsJuila.concat(dogsKate);
//   console.log('log ~ myCheckDogs ~ dogsArr:', dogsArr);

//   dogsArr.forEach(function (dog, i) {
//     const type = dog >= 3 ? 'adult' : 'puppy';
//     if (dog >= 3) {
//       console.log(`Dog number ${i} is an ${type}, and ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i} is still a ${type}`);
//     }
//   });
// }
// myCheckDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////////////////
// Data Transformations: map, filter, reduce
// - map: method that creates a new array by calling the callback function on each element of the input array
// - filter: method that creates a new array with elements that pass the test in
// - reduce: method that reduces all elements of an array down to one single value (e.g. adding all elements together)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsdMap = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsdMap);

const movementsUSDArr = [];
for (const movement of movements) {
  movementsUSDArr.push(movement * eurToUsdMap);
}
console.log('log ~ movementsUSDArr:', movementsUSDArr);

const movementsDesription = movements.map((mov, i) => {
  return `Movement ${i}: you ${
    mov > 0 ? 'depostied' : 'withdrawal'
  }, it is ${Math.abs(mov)}`;
});
console.log(
  'log ~ movementsDesription ~ movementsDesription:',
  movementsDesription
);

// forEach has side effect, it doesn't return a new array
// map returns a new array
const createUsername = acs => {
  acs.forEach(function (acc) {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
createUsername(accounts);
console.log('log ~ createUsername ~ accounts:', accounts);

//filter
const movementsFilter = [200, 450, -400, 3000, -650, -130, 70, 1300];
const withdrawals = movementsFilter.filter(mov => mov < 0);
console.log('log ~ withdrawals:', withdrawals);

// reduce method
const arrReduce = [1, 2, 3, 4, 5, 6];
const summary = arrReduce.reduce(function (acc, curr, i, arr) {
  return acc + curr;
}, 0);
console.log('log ~ summary ~ summary:', summary);

// Maximum value
const arr = [1, 2, 3, 4, 5, 6];
const max = arr.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, arr[0]);
console.log('log ~ max ~ max: ', max);
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages 
to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', 
which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
function calcAverageHumanAge(arrayOfAgeDogs) {
  const humanAge = arrayOfAgeDogs
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, _, { length }) => acc + age / length, 0);
  console.log(humanAge);
}
calcAverageHumanAge(data1);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const Jessica = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(Jessica);
