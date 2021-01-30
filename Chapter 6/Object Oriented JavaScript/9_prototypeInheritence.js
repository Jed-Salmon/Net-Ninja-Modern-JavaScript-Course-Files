// Prototype Inheritance

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

// Create a Admin constructor and inherit from User:
function Admin(...args){
  // args puts params into an array
  console.log(args);
  // Inherit User class by passing Admin properties
  User.apply(this, args); 
  // new Admin object is 'this'.
  // Above applies the context of this into User.
  this.role = 'super admin';
}

// Admin is still a user so we want it to access Users functions as well.
// Create a new object and inherit functions from User prototype object:
Admin.prototype = Object.create(User.prototype); // Pass in the object to inherit from

// Add an delete method for Admins, but not User
Admin.prototype.deleteUser = function(u){
  users = users.filter(user => {
    return user.email != u.email;
  });
};

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('jed@ninjas.com', 'Jed');

let users = [userOne, userTwo, admin];

console.log(users);
console.log(admin);
// Points to User prototype first since we've based Admin prototype on the User prototype.
// Admin has the deleteUser method but not User. It is not part of a prototype chain.

admin.login();
admin.deleteUser(users[2]);

console.log(users);