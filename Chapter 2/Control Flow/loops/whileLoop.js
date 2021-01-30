// while loops

let i = 0; // declare the initialization variable outside the while loop
const names = ["jed", "mario", "luigi"];

// while (i < 5) {
//   console.log("in loop:", i);
//   i++; // Needs an incremental value otherwise it results in an infinite loop
// }

while (i < names.length) {
  console.log(names[i]);
  i++;
}

// A while loop is just an alternative to creating a for loop.
