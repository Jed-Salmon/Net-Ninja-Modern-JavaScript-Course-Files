// foreach method

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// for each is a method which iterates over an array. Similar to a loop but more 'elegant'.

// The forEach method can have two parameters passed into it:
// First parameter = current value. Whatever is the value at the time we're iterating over.
// Second parameter = index of the current value.

// people.forEach(function(person){
//   console.log(person);
// });

// Shorthand
// people.forEach((person, index) => {
//   console.log(index, person);
// });

// Define a callback function somewhere else, and then pass it in to the for each method (or any other method).
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
