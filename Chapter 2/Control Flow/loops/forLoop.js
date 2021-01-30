// Use loops for cycling through data

// for loops

// comprise of 3 sections:
// Initialization variable,
// condition (evaluations true or false, with true running the code block),
// Final expression

// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// } // No semicolon at the end of loops.

// console.log("loop finish");

// Cycle through an array without explicitly stating how many times to loop

const names = ["jed", "mario", "luigi"];

// for (let i = 0; i < names.length; i++) {
//   console.log(i);
// }

// Returns 0, 1, 2
// for as long as 'i' is less than the arrays length, it will cycle through

// Log each name within the array:
for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// An Iteration is one cycle through an array or some data. So once the code block {} has been performed, that is one iteration.
