// Remember, we're gonna use strict mode in all scripts now!
'use strict'
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]

  for (const curTemp of temps) {
    if (typeof curTemp !== 'number') continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  return [min, max]
}

const amplitude = calcTempAmplitude(temperatures)
console.log('🚀 ~ amplitude:', amplitude)

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Divide and conque problem
// - Merge 2 arrays, and then find min and max values

const calcTempAmplitudeNew = function (t1, t2) {
  const tempNew = t1.concat(t2)
  let min = tempNew[0]
  let max = tempNew[0]

  for (const curTemp of tempNew) {
    if (typeof curTemp !== 'number') continue

    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  return max - min
}

const result = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5])
console.log('🚀 ~ result:', result)

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Chuyển mảng thành chuỗi
// - Tim ngày? index + 1

// 2) Divide and conque problem
// - chuyển giá trị phần từ mảng vào một chuỗi "... ${value}ºC in ${index + 1} days"
// - Thêm ... vào cuối chuỗi
// - In ra chuỗi

function printForecast(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}ºC in ${i + 1} days `
  }
  console.log(str + '...')
}

printForecast([17, 21, 23])

// How to reverse a value passed in?

// 1) understanding the problem
// - the type of value passed in: number, string, array, obj
// - return the reversed value
// - how to check the type of value passed in?
// - return the reversed value (as the type passed in)

// 2) Divide and conque problem
// - check the type of value passed in isn't an array, number, string return the value
// - if the value is an array, return the reversed array
// - if the value is a number, return the reversed number
// - if the value is a string, return the reversed string
// - return the reversed value

// 3) research
// - how to reverse a number in js
function reverseNumber(number) {
  return parseInt(number.toString().split('').reverse().join(''))
}

function reverseString(str) {
  return str.split('').reverse().join('')
}

function reverseArray(arr) {
  return arr.reverse()
}

function reverseValue(value) {
  if (
    typeof value !== 'number' &&
    typeof value !== 'string' &&
    !Array.isArray(value)
  )
    return value
  if (typeof value === 'number') return reverseNumber(value)
  if (typeof value === 'string') return reverseString(value)
  if (Array.isArray(value)) return reverseArray(value)
  return value
}

console.log(reverseValue(123.4))
console.log(reverseValue('123'))
console.log(reverseValue([1, 2, 3]))
