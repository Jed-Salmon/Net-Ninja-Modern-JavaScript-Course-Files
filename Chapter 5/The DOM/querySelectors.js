// Query the DOM

// Query Selector Singular
let para = document.querySelector("p.error");

console.log(para);

// //Query Selector All
const paras = document.querySelectorAll("p"); // node list
// Like an array but limited (can't use methods)
// Can use square bracket notation to select a single element
console.log(paras[2]);
console.log(paras);

// We can use forEach on a node list:
paras.forEach((para) => {
  console.log(para);
});

const errors = document.querySelectorAll(".error");
console.log(errors);
