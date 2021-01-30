// object literals - Methods

let user = {
  name: "Crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
  login: function () {
    console.log("this user is logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
};

// Methods are functions that are defined on an object
// A regular function isn't defined inside an object, a method is.

user.login();
user.logout();
