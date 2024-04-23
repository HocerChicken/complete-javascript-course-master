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
// function calcAge1(birthYear) {
//   const yearNow = new Date().getFullYear();
//   const age = yearNow - birthYear;
//   return age;
// }

// const age1 = calcAge1(2002);
// console.log(age1);

// Function Expression
// const calcAge2 = function (birthYear) {
//   const yearNow = new Date().getFullYear();
//   const age = yearNow - birthYear;
//   return age;
// };

// const age2 = calcAge1(2002);
// console.log(age2);

// Arrow Function (is a special form of function expression with no this keyword)
// const calcAge3 = (birthYear) => {
//   const yearNow = new Date().getFullYear();
//   const age = yearNow - birthYear;
//   return age;
// };

// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge3(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(2002, 'Hoc'));

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
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// friends[2] = 'Jay';
// console.log(friends);

// const years = new Array(1991, 2000, 2005);

// const firstName = 'Hoc';
// const hocPham = [firstName, 'Pham', 2024 - 2002, 'student', friends];
// console.log(hocPham);
// console.log(hocPham.length);

// const calsAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const years = [2002, 2005, 2007];
// const ageArr01 = calsAge(years[0]);
// const ageArr02 = calsAge(years[1]);
// const ageArr03 = calsAge(years[years.length - 1]);

// console.log(ageArr01, ageArr02, ageArr03);

// const ages = [
//   calsAge(years[0]),
//   calsAge(years[1]),
//   calsAge(years[years.length - 1]),
// ];
// console.log(ages);

// Basic Array Operations (Methods)
// const friends01 = ['Michael', 'Steven', 'Peter'];

// // // // console.log("🚀 ~ friends01.push('Jay'):", friends01.push('Jay'));
// friends01.push('Jay');
// // // // console.log('🚀 ~ friends01:', friends01);

// friends01.pop('Jay');
// // // // console.log("🚀 ~ friends01.pop('Jay'):", friends01.pop('Jay'));
// // // // console.log('🚀 ~ friends01:', friends01);

// // // // console.log("🚀 ~ friends01.unshift('John'):", friends01.unshift('John'));
// friends01.unshift('John');
// // // // console.log('🚀 ~ friends01:', friends01);

// friends01.shift();
// // // // console.log('🚀 ~ friends01.shift():', friends01.shift());
// // // // console.log('🚀 ~ friends01:', friends01);

// // // // console.log("🚀 ~ friends01.indexOf('Steven'):", friends01.indexOf('Steven'));
// // // // console.log("🚀 ~ friends01.indexOf('Bob'):", friends01.indexOf('Bob'));

// // // // console.log("🚀 ~ friends01.includes('Steven'):", friends01.includes('Steven'));
// // // // console.log("🚀 ~ friends01.includes('Bob'):", friends01.includes('Bob'));

// if (friends01.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

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
// const calcTip = (billValue) => {
//   return billValue >= 50 && billValue <= 300
//     ? 0.15 * billValue
//     : 0.2 * billValue;
// };

// const bills = new Array(125, 555, 44);
// // // // console.log('🚀 ~ bills:', bills);
// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// // // // console.log('🚀 ~ tips:', tips);
// const totals = new Array(
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2]
// );
// // // // console.log('🚀 ~ totals:', totals);

///////////////////////////////////////
// Introduction to Objects
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };

//Challenge
// "Jonas has 3 friends, and his best friend is Michael"
// const result = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`;

// // // // console.log('🚀 ~ result:', result);

//Object method
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   hasDriversLicense: false,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old, and he has a
//     ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//   },
// };

// dùng từ khóa this có thể tối ưu DRY
// console.log(jonas.calcAge());
// console.log(jonas.getSummary());
//challenge
// Jonas is a 46-year old teacher, and he has a driver's license

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: 'Mark Miler',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

///////////////////////////////////////
// Loops
const jonsArr = ['Hoc', 'Pham', '22', 2002, ['Michael', 'Peter', 'Steven']];
// const types = [];
// for (let i = 0; i < jonsArr.length; i++) {
//   console.log(jonsArr[i], typeof jonsArr[i]);
//   types[i] = typeof jonsArr[i];
// }
// console.log(types);

// const yearsLoop = [1900, 2000, 2005, 2010];
// const agesLoop = [];
// for (let i = 0; i < yearsLoop.length; i++) {
//   agesLoop.push(2024 - yearsLoop[i]);
// }
// console.log('🚀 ~ agesLoop:', agesLoop);
//continue: exit the current iteration of the loop and continue to the next one
//break: completely terminate the whole loop

//Looping Backwards and Loops in Loops
for (let i = jonsArr.length - 1; i >= 0; i--) {
  console.log(jonsArr[i]);
}

for (let cycleRun = 6; cycleRun >= 1; cycleRun--) {
  console.log('The cycle run starts ' + cycleRun);
  for (let i = 0; i < 1; i++) {
    console.log('You done this cycle run!' + cycleRun);
  }
}
///////////////////////////
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = new Array();
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
  const billValue = bills[i];
  tips.push(calcTip(billValue));
  totals.push(billValue + calcTip(billValue));
}

/*
Write a function calcAverage which takes an array called arr as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. 
To do the addition, start by creating a variable sum that starts at 0. 
Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. 
This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.*/
const arrahy = [2, 3, 7];
const calcAverage = (arrahy) => {
  let sum = 0;
  for (const element of arrahy) {
    sum += element;
  }
  return sum / arrahy.length;
};

console.log('🚀 ~ calcAverage(totals):', calcAverage(totals));
