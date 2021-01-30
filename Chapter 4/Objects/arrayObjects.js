// object literals - Storing objects inside arrays
// When retrieving data from a database, it will be in the form of an object inside an array.

const arrayObjectExample = [
  { title: "why mac & cheese rules", likes: 30 }, // first element inside the array
  { title: "10 things to make with marmite", likes: 50 },
];

console.log(arrayObjectExample);

let user = {
  name: "Crystal",
  age: 30,
  email: "crystal@thenetninja.co.uk",
  location: "Berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
  ],
  login: function () {
    console.log("this user is logged in");
  },
  logout: function () {
    console.log("the user logged out");
  },
  logBlogs() {
    // Must be a regular function. => does not work with 'this' inside of objects.
    console.log("this user has written the following blog:");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes); // Each blog will represent the object as we cycle through.
    });
  },
};

user.logBlogs();
