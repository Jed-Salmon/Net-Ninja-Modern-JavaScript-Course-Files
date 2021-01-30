// Functional Programming 
// How we would have wrote our code before OOP:

// Problems with this code is that it is not scalable and can get pretty unmanageable.
// We need to repeat the same 3 variables for each user and there could be hundreds.
// Wouldn't it be better if we could group users, with their properties and functionality into a single variable?
// This is where Object Oriented JavaScript comes in. See the next lecture to find out more.

// Create user one:
let userOneEmail = '';
let userOneName = '';
let userOneFriends = '';

// Create user two:
let userTwoEmail = '';
let userTwoName = '';
let userTwoFriends = '';

// Create user three:
let userThreeEmail = '';
let userThreeName = '';
let userThreeFriends = '';

function login(email){
  console.log(email, 'is now online');
}

function logout(email){
  console.log(email, 'has logged out');
}

function logFriends(friends){
  friends.forEach(friend => {
    console.log(friend);
  })
}

login(userOneEmail);