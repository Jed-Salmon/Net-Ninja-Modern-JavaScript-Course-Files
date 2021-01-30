// Explicit Type Conversion

let score = "100";

console.log(score + 1); // 1001 -- Turns 1 into a string and concatenates them together.
console.log(typeof score); // string

let points = "100";

points = Number(points);
console.log(points + 1); // 101
console.log(typeof points); // number

// let result = Number("hello");
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0); // 0 is a falsy value
let result = Boolean("0"); // truthy

console.log(result, typeof result);
// NaN
// 50 string
// true boolean
// false boolean
// true boolean

// Implicit type conversion. We saw this with Loose comparison (==). Javascript changed the type of our values behind the scene before comparing them.
