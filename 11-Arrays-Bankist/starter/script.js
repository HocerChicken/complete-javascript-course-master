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

let sortState = false;

const displayMovements = (movements, sortt = false) => {
  containerMovements.innerHTML = '';

  const movs = sortt ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

const displayBalance = account => {
  const balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  account.balance = balance;
  labelBalance.innerHTML = balance + ' EUR';
};

const displayCalculateSummary = (movements, interestRate) => {
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
    .map(mov => (mov * interestRate) / 100)
    .filter(mov => {
      return mov > 1;
    })
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);

  labelSumInterest.textContent = interest + '💶';
};

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

const updateUI = acc => {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  displayBalance(acc);

  // Display summary
  displayCalculateSummary(acc.movements, acc.interestRate);
};

let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // Display UI and message
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    // inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferTo = inputTransferTo.value;
  const receiverAcc = accounts.find(acc => acc.username === transferTo);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    currentAccount.balance >= amount &&
    receiverAcc &&
    amount > 0 &&
    currentAccount.username !== receiverAcc.username
  ) {
    // Do transfer
    currentAccount.movements.push(-amount);
    receiverAcc?.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // delete account
    const indexDelete = accounts.findIndex(
      acc => acc.username === inputCloseUsername.value
    );
    accounts.splice(indexDelete, 1);

    // HideUI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortState);
  sortState = !sortState;
});
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
/*
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
*/
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

///////////////////////
find() method => returns the first element in the array that satisfies the provided testing function
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const Jessica = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(Jessica);
*/

// findIndex() method => returns the index of the first element in the array that satisfies the provided testing function

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7);

// Empty arrays + fill method
const x = new Array(7); // empty array with 7 empty elements
x.fill(1, 3, 5); // fill the array with 1 from index 3 to 5
x.fill(1); // fill the array with 1

// Array.from() method
const y = Array.from({ length: 7 }, () => 1); // create an array with 7 elements and fill with 1

const newLocal_1 = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposit += curr) : (sums.withdraw += curr);
      return sums;
    },
    { deposit: 0, withdraw: 0 }
  );
const newLocal = newLocal_1;
const { deposit, withdraw } = newLocal;
console.log('log ~ deposit, withdraw:', deposit, withdraw);

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion 
and add it to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and 
sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/**
 * Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion 
and add it to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
 */
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
/*
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, 
so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
*/

const saraDog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(
  `Sarah's dog eat too ${
    saraDog.curFood >= saraDog.recommendedFood ? 'much' : 'little'
  }`
);

/**
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
 */

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log('log ~ ownersEatTooMuch:', ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log('log ~ ownersEatTooLittle:', ownersEatTooLittle);

/**
 4. Log a string to the console for each array created in 3., 
 like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
 */

console.log(`${ownersEatTooMuch.slice().join(' and ')} eats too much!!!`);
console.log(`${ownersEatTooLittle.slice().join(' and ')} eats too little!!!`);

/**
 5. Log to the console whether there is any dog eating EXACTLY the amount of food 
 that is recommended (just true or false)
 */
const isOK = dog =>
  dog.currFood >= 0.9 * dog.recommendedFood &&
  dog.currFood <= 1.1 * dog.recommendedFood;

dogs.forEach(dog => {
  console.log(`${dog.owners.join(' and ')} is ${isOK(dog)}`);
});

/**
 * 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and 
sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
 */
console.log(dogs.some(dog => isOK(dog)));

const dogOk = dogs.filter(dog => isOK(dog));

const dogSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log('log ~ dogSorted:', dogSorted);
