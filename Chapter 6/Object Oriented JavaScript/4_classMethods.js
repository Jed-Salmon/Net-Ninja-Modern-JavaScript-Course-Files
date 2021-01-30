// Adding methods to our classes:

class User {
  constructor(email, name){
    this.email = email;  
    this.name = name;
  }
  login(){
    console.log(this.email, 'just logged in');
  }
  logout(){
    console.log(this.email, 'has logged out');
  } // 'this' still equals the new user object
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
userTwo.logout();

console.log(userOne);
// Methods are shared in the proto property.
// They are only written once but shared across all instances of User.