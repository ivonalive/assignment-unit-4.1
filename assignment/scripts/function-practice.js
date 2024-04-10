console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log(helloName('Ivona'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(2, 5))

// 4. Function to multiply three numbers & return the result
function multiplyThree(number1, number2, number3) {
  return number1 * number2 * number3;
}
console.log(multiplyThree(3,2,3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else{
  return false;
  }
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(3));
console.log(isPositive(8));
console.log(isPositive(-23));
console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let nature = ['ocean', 'trees', 'animals'];
let speaces = [];
function getLast(array) {
for (item of array){
  return array.pop();
}
if ( array.length === 0){
  return 'undefined';
}
}
console.log(getLast(nature));
console.log(getLast(speaces));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let green = ['tree', 'bush', 'lake'];
function find(value, array) {
for (item of array){
  if (item === value){
    // first return is red only
    return true;
  } 
} 
// second return needs to be outside of the loop to be red
  return false;
}


console.log(find('bush', green));
console.log(find('tree', green));
console.log(find('lake', green));
console.log(find('mouse', ['mouse', 'desktop', 'keyboard']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  
}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (number of array){
    sum += number;
  }
  // TODO: return the sum
  return sum;
}
console.log(sumAll([2,4,4]))
let numbers = [4,4,4];
console.log(sumAll(numbers));


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  // need an empty array to push in the positive numbers
  let positiveNumbers = [];
  for (let number of array) {
    // console.log('number', number);
    if(number > 0) {
      positiveNumbers.push(number);
    }
  }
  return positiveNumbers;
}
let exampleNumbers = [-4, 10, 2, 0, -100, 4];
let resultNumber = allPositive(exampleNumbers);
console.log('resultNumber', resultNumber)
console.log(allPositive([-2,-3,-4]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
