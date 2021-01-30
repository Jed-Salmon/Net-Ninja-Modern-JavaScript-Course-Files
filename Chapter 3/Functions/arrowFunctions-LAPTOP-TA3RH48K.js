//regular function

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// arrow function

const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log("area is:", area);

// Arrow replaces function keyword.
// No need for parenthesis if there is only 1 parameter
// Parenthesis requires for no parameters and multiple parameters.
// If only 1 return, then you can remove 'return' & '{}'.

// The handling of the 'this' keyword is different in arrow functions compared to regular functions.
// This will be covered in a later lecture.

/*-----------------------------------------------------------------------------------*/
/*  Arrow Function Cheat Sheet
/*-----------------------------------------------------------------------------------*/

// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7

// Arrow function with no arguments
const printHello = () => {
  console.log("hello");
};
printHello(); // Prints: hello

// Arrow functions with a single argument
const checkWeight = (weight) =>
  console.log(`Baggage weight : ${weight} kilograms.`);
checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 6
