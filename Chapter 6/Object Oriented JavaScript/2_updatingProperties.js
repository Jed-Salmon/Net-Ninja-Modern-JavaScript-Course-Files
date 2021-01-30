// NetNinja's Object Oriented JavaScript Tutorial:

// Updating Properties:
let userOne = {
  email: 'ryu@ninjas.com',
  name: 'Ryu',
  login(){
    console.log(this.email, 'has logged in')
    // this refers to the object userOne
  },
  logout(){
    console.log(this.email, 'has logged out')
  }
};

// Dot notation
userOne.name = 'Yoshi';

// Square Bracket Notation
userOne['email'] = 'Yoshi@mariokorp.com'
// Must be in a string

// Square Bracket notation is useful when we are accessing dynamic content
let prop = 'name'; // name will automatically update at some point.
userOne[prop] = 'Jed'; // Changes the name (could be a user input).
console.log(userOne[prop]); // Prints the name

// We can pass in variables using Square Brackets.
// We can't do this using dot notation (userOne.prop).

// We can create new properties which don't yet exist:
userOne.age = 22;
userOne.logInfo = () => {}

// Not the best practice. 
// Would be better to keep object properties and methods inside their object literal definition.
// This makes our code more legible, since we can see everything one single place.

console.log(userOne);

// There is one flaw with this practice. Imagine if we had several users, each with different values.
// Do we just copy over and repeat the code but change the values?

// No! this can get out of control. We do not need repeatable code!
// Especially functions as this takes up memory.

let userTwo = {
  email: 'sam@ninjas.com',
  name: 'Sam',
  login(){
    console.log(this.email, 'has logged in')
    // this refers to the object userOne
  },
  logout(){
    console.log(this.email, 'has logged out')
  }
};

let userThree = {
  email: 'ben@ninjas.com',
  name: 'Ben',
  login(){
    console.log(this.email, 'has logged in')
    // this refers to the object userOne
  },
  logout(){
    console.log(this.email, 'has logged out')
  }
};

// There is a better way to create multiple instances of the same object without having to re-write it over and over again. This is where Classes come in! (see the next lesson to find out more).