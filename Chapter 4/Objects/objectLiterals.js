// Object literals

// Objects have properties and methods (things it can do).

// E.g - Blog Object:
// Properties = Title, content, author
// methods = publish, unpublish, delete

let user = {
  name: "Crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: ["why mac & cheese rules", "10 things to make with marmite"],
};

// Objects contain key value pairs.
// Name is the key and Crystal the value.
// Together this makes up one property of this user object.

// Access and update object properties using dot notation:
console.log(user);
console.log(user.name);

user.age = 35; // updates a property of an object
console.log(user.age);

// Access and update object properties using square bracket notation:
console.log(user["email"]); // has to be in string format

user["name"] = "chung-li"; // Update property
console.log(user["name"]);

const key = "location";
console.log(user[key]);
// square bracket notation can allow variables to be passed.
// same as passing 'location' within the square brackets.

// Dot notation (user.key) would look for property name of key in the user object (doesn't exist)

console.log(typeof user); // Object
