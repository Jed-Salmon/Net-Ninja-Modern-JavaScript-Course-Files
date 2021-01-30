// Method Chaining
// Call one method then chain on another once it's done

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

let userOne = new User('ryu@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

// After setting 'return this' we can now chain methods:
userOne.login().updateScore().updateScore().logout();

// Return this means we insert userOne before calling each method
// Same as: userOne.login()userOne.updateScore()userOne.logout();