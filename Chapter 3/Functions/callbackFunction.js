// callback functions

// We can pass in a function as an argument. This is called a callback function.

// higher-order function
const myFunc = (callbackFunc /*pass function as param*/) => {
  // do something
  let value = 50;
  callbackFunc(value); // Invokes the callback function & passes 'value' as an argument
};

// myFunc(function (value) { -- Passes function as an argument and value as the parameter.
//   console.log(value);
// });

// Shorthand
myFunc((value) => {
  // do something
  console.log(value);
});

/* We must declare 'value' as the parameter, since when we call
it we're going to be getting a value inside it, so when that
value is passed into this callback function and it is called,
we can then log it to the console. */

/* General premise of a callback function:
We pass a function into another function as an argument, and at some
point in that other function that callback function will be called 
and be passed a value which we can take in.
*/

// "A function that expects a function as a parameter, creates a function and/or returns a function" - The Coding Train
