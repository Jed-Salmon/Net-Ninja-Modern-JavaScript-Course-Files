// Logical NOT (!)
// Executes code if a condition is false

console.log(!true); // false
console.log(!false); // true

let user = false; // user will always be false.

// if statement only runs if condition is true.
// ! changes the if statements evaluation of user to true
if (!user) {
  console.log("you must be logged in to continue");
}
