let js = 'amazing';
// if (js === "amazing") alert("JavaScript is fun");

console.log(2 + 3 + 4);

///////////////////////////
// Values and and variables
console.log('Hoc PHam');
console.log(23);

let firstName = 'Hoc';
console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let jonas_matilda = 'HP';
let $function = 27;
let person = 'Hoc Pam';
let PI = 3.1415;
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Student';
let job2 = 'Teacher';

console.log(myFirstJob);

////////////////////////////////////////////////////////////////
// Data Types
let javascriptIsFun = false;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
////////////////////////////////
//let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
//birthYear = 1991; -> const can't assign a new value
//const job; ->  Missing initializer in const declaration
var job = 'programmer';
job = 'teacher';

lastName = 'Pham';
console.log(lastName);

////////////////////////////////
// Basic operators
// Math operators
const yearNow = new Date().getFullYear();
const ageJonas = yearNow - 1991;
const ageHoc = yearNow - 2002;
console.log(ageHoc, ageJonas);

const firstNamee = 'Hoc';
const lastNamee = 'Pham';

console.log(firstNamee + ' ' + lastNamee);

//Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageHoc); // >, <, >=, <=
console.log(ageHoc >= 18);

const isFullAge = ageHoc >= 18;
console.log(yearNow - 1991 > yearNow - 2002);

////////////////////////////////
// Operator Precedence
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

function calcBMI(mass, height) {
  return mass / height ** 2;
}
const bmiMark = calcBMI(massMark, heightMark);
console.log('🚀 ~ bmiMark:', bmiMark);

const bmiJohn = calcBMI(massJohn, heightJohn);
console.log('🚀 ~ bmiJohn:', bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log('🚀 ~ markHigherBMI:', markHigherBMI);

////////////////////////////////
// Strings and template literals
const stringFirstName = 'Hoc';
const stringJob = 'student';
const stringBrithYear = 2002;
const stringYear = new Date().getFullYear();
//string
const stringHoc =
  'Im ' +
  stringFirstName +
  ', a ' +
  stringJob +
  ' in ' +
  (stringYear - stringBrithYear) +
  ' years old';
console.log('🚀 ~ stringHoc:', stringHoc);

//template literals
const templateLiterals = `I'm ${stringFirstName}, a ${stringJob} in ${
  stringYear - stringBrithYear
} years old`;
console.log('🚀 ~ templateLiterals:', templateLiterals);

//Taking Decision
const myAge = stringYear - stringBrithYear;

function checkAgeDrivingLicense(ifAge) {
  if (ifAge >= 18) {
    console.log('You can start a driving license 🛵');
  } else {
    const yearLeft = 18 - ifAge;
    console.log(
      "You can't start a driving license, wait for another " +
        yearLeft +
        ' years'
    );
  }
}
checkAgeDrivingLicense(myAge);

////////////////////////////////
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Hoc')); // kết quả của một toán tử không tạo ra một valid number
console.log(typeof NaN); // Mặc dù viết là "Not a Number" tuy nhiên NaN vẫn là kiểu number,
//nhưng nó sẽ hiển thị ra một giá trị không hợp lệ

console.log(String(23), 23);

//type coercion (note for + operator)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); //23-10-3=10
console.log('23' * '2'); //23*2=46

/////////////////////////////
//Truthy and Falsy values
// 5 falsy values: 0, '', undefine, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log('Don"t spend it all!.');
} else {
  console.log('You should get a job!');
}

const height = 0; // return false value
if (height) {
  console.log('Hey! height is defined');
} else {
  console.log('Heihgt is UNDEFINED');
}

///////////////////////////////
//Equality operators vs strict equality operators (== vs ===)
const checkOperator = 18;
if (age == 18) console.log('You just become an adult (loose)');
if (age === 18) console.log('You just become an adult (strict)');

///////////////////////////////
// Boolean Logic and Logical Operators
// 1. Boolean logic
// - AND (&&) -> return true if all conditions are true
// - OR (||) -> return true if one of the conditions is true
// - NOT (!) -> return opposite value
// 2. Logical operators
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someone else should drive...');
}

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
 and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
 a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! 
 So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/

getTheWinner([96, 108, 89], [88, 91, 110]);
getTheWinner([97, 112, 101], [109, 95, 123]);
getTheWinner([97, 112, 101], [109, 95, 106]);

function getTheWinner(dolphins, koalas) {
  const avgDolphins = (dolphins[0] + dolphins[1] + dolphins[2]) / 3;
  const avgKoalas = (koalas[0] + koalas[1] + koalas[2]) / 3;

  if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
  } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
  } else if (
    avgDolphins === avgKoalas &&
    avgDolphins >= 100 &&
    avgKoalas >= 100
  ) {
    console.log('Both with the trophy 🏆');
  } else {
    console.log('No one wins the trophy');
  }
}

///////////////////////////////
// The switch statement
let day = 'sunday';

switch (day) {
  case 'monday':
  case 'wednesday':
  case 'friday':
  case 'sunday':
    console.log('Code the Graduation thesis!!!');
    break;
  case 'tuesday':
  case 'thursday':
  case 'saturday':
    console.log('Code Side project for my CV');
    break;
  default:
    console.log('Sleep all day!!! becasue this day not exist!!!');
}

day = 'happyday';
if (
  day === 'monday' ||
  day === 'wednesday' ||
  day === 'friday' ||
  day === 'sunday'
) {
  console.log('Code the Graduation thesis!!!');
} else if (day === 'tuesday' || day === 'thursday' || day === 'saturday') {
  console.log('Code Side project for my CV');
} else {
  console.log('Sleep all day!!! becasue this day not exist!!!');
}

////////////////////////////////
// Expression and statement
// Expression: produce value include: literals (7 or 'Hoc'), variable (age), operator (3+4), function call (calcAge(1991))
// Statement: perform an action include: control flow statements (if, for, while), function declaration, variable declaration

// The conditional operator (expressions)
function checkAgeForDrink(age) {
  return age >= 18 ? 'beer' : 'water';
}

console.log(checkAgeForDrink(19));

//challenge #4: Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
//In his country, it's usual to tip 15% if the bill value is between 50 and 300.
//If the value is different, the tip is 20%.
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip15 = bill * 0.15;
const tip20 = bill * 0.2;

const tip = bill >= 50 && bill <= 300 ? tip15 : tip20;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
