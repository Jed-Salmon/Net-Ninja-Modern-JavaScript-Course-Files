// variables & block scope

const age = 30; // Document root. Has a global scope and can be accessed anywhere in the file.

// let age = 50; -- Returns Uncaught Syntax Error. Age has already been declared.

if (true) {
  // age = 40; -- Only refers to the already defined global variable (30)
  const age = 40; // You can redefine the variable inside a code block to give it local scope.
  const name = "jed"; // The scope of this variable is only valid here. We are not defining it at a root level / global scope.
  console.log("inside first code block: ", age, name); // Age = 40 only inside this code block.

  if (true) {
    // Nested code block
    // const age = 50; -- Creates new local scope inside just this code block.
    console.log("inside 2nd code block", age, name); // Takes the most recently defined value, so the value whose scope is most immediate outside of this code block.
    var test = "hello";
  }
}

console.log("outside code block: ", age, name, test);
/* 
inside first code block:  40 jed
inside 2nd code block 40 jed
outside code block:  30 hello

^ Same result for both let and const variables.
*/

// var keyword is not given block scope.
// Better of using let and const as it's more useful to declare a variable that is only accessible inside a code block.
