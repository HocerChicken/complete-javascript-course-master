'use strict';
/*
///////////////////////////////////////
// Activation Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

 */

///////////////////////////////////////
// Functions
/**
function logger(mes) {
  console.log(mes);
}

//call / running / invoking function
logger('My name is Hoc Pham');
logger('My age is 22');
logger("I'm in the road to be a software engineer");

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apple and ${oranges} orange.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
 */

// Function Declaration
function calcAge1(birthYear) {
  const yearNow = new Date().getFullYear();
  const age = yearNow - birthYear;
  return age;
}

const age1 = calcAge1(2002);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  const yearNow = new Date().getFullYear();
  const age = yearNow - birthYear;
  return age;
};

const age2 = calcAge1(2002);
console.log(age2);

// Arrow Function (is a special form of function expression with no this keyword)
const calcAge3 = (birthYear) => {
  const yearNow = new Date().getFullYear();
  const age = yearNow - birthYear;
  return age;
};

const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge3(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2002, 'Hoc'));

/*
// Coding Challenge #4
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,41);

function checkDoubleValue(value1, value2) {
    return (value1 >= value2 * 2);
}

function checkWinner(avgDolphins, avgKoalas) {
    if(checkDoubleValue(avgDolphins, avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    }
    else if(checkDoubleValue(avgKoalas, avgDolphins)){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log("No team wins...")
    }
    return -1;
}

checkWinner(scoreDolphins, scoreKoalas);
*/

//Array
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

friends[2] = 'Jay';
console.log(friends);

// const years = new Array(1991, 2000, 2005);

const firstName = 'Hoc';
const hocPham = [firstName, 'Pham', 2024 - 2002, 'student', friends];
console.log(hocPham);
console.log(hocPham.length);

const calsAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [2002, 2005, 2007];
const ageArr01 = calsAge(years[0]);
const ageArr02 = calsAge(years[1]);
const ageArr03 = calsAge(years[years.length - 1]);

console.log(ageArr01, ageArr02, ageArr03);

const ages = [
  calsAge(years[0]),
  calsAge(years[1]),
  calsAge(years[years.length - 1]),
];
console.log(ages);

// Basic Array Operations (Methods)
const friends01 = ['Michael', 'Steven', 'Peter'];

console.log("🚀 ~ friends01.push('Jay'):", friends01.push('Jay'));
friends01.push('Jay');
console.log('🚀 ~ friends01:', friends01);

friends01.pop('Jay');
console.log("🚀 ~ friends01.pop('Jay'):", friends01.pop('Jay'));
console.log('🚀 ~ friends01:', friends01);

console.log("🚀 ~ friends01.unshift('John'):", friends01.unshift('John'));
friends01.unshift('John');
console.log('🚀 ~ friends01:', friends01);

friends01.shift();
console.log('🚀 ~ friends01.shift():', friends01.shift());
console.log('🚀 ~ friends01:', friends01);

console.log("🚀 ~ friends01.indexOf('Steven'):", friends01.indexOf('Steven'));
console.log("🚀 ~ friends01.indexOf('Bob'):", friends01.indexOf('Bob'));

console.log("🚀 ~ friends01.includes('Steven'):", friends01.includes('Steven'));
console.log("🚀 ~ friends01.includes('Bob'):", friends01.includes('Bob'));

if (friends01.includes('Steven')) {
  console.log('You have a friend called Steven');
}

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// function calcTip(billValue) {
//   if (billValue < 0) return -1;
//   if (billValue >= 50 && billValue <= 300) {
//     return 0.15 * billValue;
//   } else {
//     return 0.2 * billValue;
//   }
// }
const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
    ? 0.15 * billValue
    : 0.2 * billValue;
};

const bills = new Array(125, 555, 44);
console.log('🚀 ~ bills:', bills);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log('🚀 ~ tips:', tips);
const totals = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);
console.log('🚀 ~ totals:', totals);

///////////////////////////////////////
// Introduction to Objects
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

//Challenge
// "Jonas has 3 friends, and his best friend is Michael"
const result = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`;

console.log("🚀 ~ result:", result)