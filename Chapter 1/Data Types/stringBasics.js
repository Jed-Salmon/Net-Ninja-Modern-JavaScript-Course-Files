// Strings
console.log("hello, world 123");

let email = "mario@thenetninja.co.uk";
console.log(email);

// String Concatenation
let firstName = "Brandon";
let lastName = "Anderson";

let fullName = firstName + " " + lastName;
console.log(fullName);

// Getting Characters
console.log(fullName[2]); // Returns "a" the 3rd letter counting from 0.

// String Length
console.log(fullName.length); // Returns 16 (counts letters including the concatenated space).
// .length finds a property of the string

// String methods
console.log(fullName.toUpperCase()); // toUppercase() is a method/function
let result = fullName.toLowerCase(); // Takes the above value & stores it in variable 'result'.
console.log(result); // brandon anderson

console.log(result, fullName); // These methods do not alter the original variables themselves (non destructive).

let index = email.indexOf("@"); // ('@') passing a value into a method is called an argument
console.log(index); // Counts the index (position) of '@'. Counts from 0, which returns 5.
