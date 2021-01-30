//  functions

const greet = () => "hello";

let resultOne = greet(); // Invokes the function, returns the values and stores it in the variable 'resultOne'.

console.log(resultOne);

//  methods
const name = "jed";

let resultTwo = name.toUpperCase();
//                  ^ dot notation
console.log(resultTwo);

// A method is a function, but what distinguishes methods is the way that we invoke them and where they are defined.
// when we use a method the method is invoked using dot notation

// Methods are functions which are associated with an object or datatype, like a string.
// On the other hand, our function (greet) was just defined on its own, not on an object or datatype.
