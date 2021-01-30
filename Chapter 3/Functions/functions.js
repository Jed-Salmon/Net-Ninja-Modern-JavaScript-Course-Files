// Functions datatype = Object
// functions allow us to do is define a block of code which we can call and execute whenever we want

// function declaration
greet();
greet();

function greet() {
  console.log("hello there!");
}

greet(); // Calling / Invoking the function

// function expression
const speak = function () {
  console.log("good day!");
}; // Always set a semicolon at the end of an expression.
// (Only time you'll see a semicolon at the end of a code block).

// Anytime you declare a variable and set it equal to something, whether it's a function, string, number or something else, that is known as an expression.

speak();
speak();
speak();

// Function declaration gets hoisted to the top. Meaning you can call greet before the function is defined/declared.
// Function expressions however, are NOT hoisted.

// Hoisting does not enforce good coding practices.
// It can jumble up your code and make it hard to follow the logic.

// Better practice to declare first then call it, so function expressions will be primarily used from this point forward.
