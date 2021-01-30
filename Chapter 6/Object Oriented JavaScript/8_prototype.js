// Prototype (under the hood)

// Anything in the proto property, we can call directly onto the object itself.
// Rather than having 'nums.__proto___.sort' we can just do 'nums.sort' (even if nums is primitive):

// Primitives can have methods used upon them, as behind the scenes JS will turn them into temporary objects.
// Every object type or class has a prototype. It is like a map for that object type.
// It contains the functionality, that is the different methods for that object type.
// For any object created for that type, the proto property will act as a pointer, referencing to those methods.

// Constructor function:
function User(email, name){
  this.email = email;
  this.name = name;
  this.online = false;
}

// Define our methods once in a single user prototype:
User.prototype.login = function(){
  this.online = true;
  console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
  this.online = true;
  console.log(this.email, 'has logged out');
}

// Only the constructor function has the prototype property.
// Not the instances of the object type.

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
// functions are no longer in the object directly. Instead under __proto__ property

userTwo.login();
userOne.login();
userTwo.logout();

// All of the above is all going on in the background when we use that class keyword instead.
// But here we're not using classes and we have manually made it possible using this prototype model.
// Another benefit to using this model is prototypal inheritance, which we cover in the next lesson!