// booleans & comparisons

// Boolean represents two values. True & False.
console.log(true, false, "true", "false");

// Methods can return booleans
// let email = "luigi@thenetninja.co.uk";
// let names = ["mario", "luigi", "toad"];

// let result = email.includes('@');
// let result = names.includes("bowser");

// console.log(result); // true // false

// Comparison operators
let age = 25;

console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 30); // true
console.log(age != 25); // false
console.log(age > 20); // true
console.log(age < 20); // false
console.log(age >= 25); // true
console.log(age <= 25); // true

let name = "jed";

console.log(name == "jed"); // true
console.log(name == "Jed"); // false -- case sensitive
console.log(name > "crystal"); // true -- Later letters in the alphabet are greater than less letters (J > C).
console.log(name > "Jed"); // true -- lowercase is greater than uppercase
console.log(name > "Zebra"); // true -- lowercase is greater than uppercase higher letters

// Loose & Strict Comparisons:

// Loose comparison (different data types can still be equal)

console.log(age == 25); // true
console.log(age == "25"); // true
console.log(age != 25); // false
console.log(age != "25"); // false

// Strict comparison (different data types cannot be equal)

console.log(age === 25); // true
console.log(age === "25"); // false
console.log(age !== 25); // false
console.log(age !== "25"); // true

// Always use strict comparison!
