// object literals - 'this' keyword
// this keyword is a context object. Depending on where and how we use it, the value will be different.

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
  logBlogs() {
    // ^ shorthand notation but still a regular function.
    // Must be a regular function. => does not work with 'this' inside of objects.
    console.log("this user has written the following blog:");
    this.blogs.forEach((blog) => {
      // this.blogs is an array & forEach is a method that can be used on arrays.
      console.log(blog);
    });
  },
};

/*
when we use a normal function as a method and invoke that method, javascript
sets the value of the this keyword to the object that the method was used on.

When we use an arrow function to create the method, javascript will not set the
value of the this keyword to be the object. So the value of 'this' does not change
from the value it was at the point in the code that the arrow function was invoked.

In order to use 'this' inside a method to refer to the object that the method is on,
we need to use a regular function or the shorthand notation - logBlogs() { }
*/

console.log(this); // Global context. Global object in JS is the window object.

user.logBlogs();
// When calling a method, JavaScript sets the value of the 'this' keyword to be the object the method was used on
