const para = document.querySelector("p");

console.log(para.innerText); // innerText is a property name not a method

// Update the text:
para.innerText = "ninjas are";
// Append to the existing text:
para.innerText += " awesome";

// Change the text of several items at once:
const paras = document.querySelectorAll("p");

paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
}); // Cycles through the node list of all these different P tags.
// For each one it fires the function and returns & adds 'new text' to each paragraph.

// Get HTML:
const content = document.querySelector(".content");
console.log(content.innerHTML);

// Update HTML:
// Overwrite the content
// content.innerHTML = "<h2>this is a new h2</h2>";

// Append to the content
content.innerHTML += "<h2>this is a new h2</h2>";

// Cycle through an array and generate a html template:
const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
