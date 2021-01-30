// Get an element by ID
const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]);

// get elements by their name
const paras = document.getElementsByTagName("p"); // Grabs all p tags
console.log(paras);
console.log(paras[1]);

// All will return a HTML Collection
// can not use forEach on HTML collection:
// errors.forEach((error) => {
//   console.log(error); // Returns errors.forEach is not a function
// });
