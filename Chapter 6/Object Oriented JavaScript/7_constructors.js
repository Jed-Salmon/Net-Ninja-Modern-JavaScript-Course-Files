// Constructors (under the hood)

// create constructor function:
// Represents our user class
function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function(){
    console.log(this.email, 'has logged in');
  }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();

// Above works, HOWEVER:
// It is not good practice to put the methods inside the constructor function.
// This is because it duplicates the function for every instance, which takes up memory.
// To get around this, we can use the prototype property on the constructor function.
// Navigate to the next lesson (prototype.js) to find out more!