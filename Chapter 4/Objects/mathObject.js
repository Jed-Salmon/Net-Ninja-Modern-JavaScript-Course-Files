// Math object

console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045 (Euler's number)

const area = 7.7;

// Methods for Math object:
console.log(Math.round(area)); // rounds up or down to the nearest integer.
console.log(Math.floor(area)); // Rounds down, no matter how high the decimal is.
console.log(Math.ceil(area)); // Rounds up, no matter how low the decimal is.
console.log(Math.trunc(area)); // takes away the decimal and leaves the integer

// Generate random numbers:
const random = Math.random();

console.log(random); // Random number between 0 & 1
console.log(Math.round(random * 100)); // Random number between 0 & 100
