class User {
  constructor(email, name){
    this.email = email;  
    this.name = name;
    this.score = 0;
  }
  login(){
    console.log(this.email, 'just logged in');
    return this;
  }
  logout(){
    console.log(this.email, 'has logged out');
    return this;
  }
  updateScore(){
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this;
  }
}

// Create an Admin user:
// Admins have all the same properties and methods as User, as well as additional functionality.
// But how do we give Admins the ability to inherit the User class without copying the code over?

// Class inheritance:
class Admin extends User {
  // Don't need a constructor for this instance. So 'this' will still refer to User.
  
  deleteUser(user){ // passes in the user you wanted to delete
    users = users.filter(u => {
      // if false then delete, if true then keep
      return u.email != user.email
      // return user emails that do not match 'user'.
      // if it matches then it will delete the match.
    });
  }
}

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
let admin = new Admin('jed@ninjas.com', 'Jed');

let users = [userOne, userTwo, admin]

admin.deleteUser(userTwo); // As an argument, pass in the user you want to delete.

console.log(users);