// common string methods

let email = "mario@thenetninja.co.uk";

// Returns position of the last 'n'
// let result = email.lastIndexOf("n");

// First argument = slice from, second = slice to.
// let result = email.slice(0, 5);

// Similar to slice, but 'slices' from an index of 4 to 14.
// From first argument + second argument
// let result = email.substr(4, 10);

let result = email.replace("m", "w"); // Replaces the FIRST 'm' with 'w'.

console.log(result); // 14 // mario // o@thenetni // wario@thenetninja.co.uk //
