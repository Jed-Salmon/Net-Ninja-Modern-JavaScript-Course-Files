// Query all elements
// Cycle through the p tags and give a class of success and error respectively

const paras = document.querySelectorAll("p");

// How I did it:
paras.forEach((para) => {
  if (para.innerText.indexOf("success") !== -1) {
    para.classList.add("success");
  }
  if (para.innerText.indexOf("error") !== -1) {
    para.classList.add("error");
  }
});

// Net ninja version:
paras.forEach((p) => {
  if (p.textContent.includes("error")) {
    para.classList.add("error");
  }
  if (p.textContent.includes("success")) {
    para.classList.add("success");
  }
});

console.log(p.innerText); // If an element is set to display none this won't work
console.log(p.textContent); // Gets all text inside the p tag, regardless of whether it's hidden or not

// Toggle a class (if element has a class remove it, and if not add it).
const title = document.querySelector(".title");

title.classList.toggle("test"); // adds
title.classList.toggle("test"); // removes

// 3 methods for classlist:
// Add
// Remove
// Toggle
