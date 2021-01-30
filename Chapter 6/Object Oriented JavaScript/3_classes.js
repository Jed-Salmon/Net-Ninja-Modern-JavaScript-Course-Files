// Classes allow us to create multiple instances of the same object without re-writing it over and over again.

// All users have an email, name and a status. These are properties all users share.
// Using the class property we can create a User class which holds these properties. 
// When we create a new user we use the User class which holds the user properties.
// We then generate an object for each user and pass in the values to each property.

class User {
  // Calls the constructor method
  constructor(email, name){
  // 'this' references new object
    this.email = email;  
    this.name = name;
  }
}

// Creates new user object inside the User class
let userOne = new User('ryu@ninjas.com', 'Ryu'); // Pass in arguments to the constructor parameters
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne, userTwo);

// The 'new' keyword:
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method