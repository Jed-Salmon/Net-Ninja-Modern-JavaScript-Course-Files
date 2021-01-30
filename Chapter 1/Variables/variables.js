let age = 25;
let year = 2020;

console.log(age, year); // 25 2020

age = 30; // you can redefine the value of a let variable
console.log(age);

const points = 100;
// points = 50; -- Can not redefine value of a const variable.
console.log(points);

// Var was used before ES6. Does not adhere to local scope.
var score = 75;
console.log(score);
