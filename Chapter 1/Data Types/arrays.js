let ninjas = ["jed", "ryu", "chun-li"];

// ninjas[1] = 'ken'; // Overrides the arrays value.
// console.log(ninjas[1]); // JS is 0 based, so ryu/ken have an index of 1.

// let ages = [20,25,30,35]; // Numbers
// console.log(ages[2]);

// let random = ['shaun', 'crystal' 30, 20]; // Mixed
// console.log(random);

// console.log(ninjas.length); // 3

// Array methods:

// let result = ninjas.join(", ");
// let result = ninjas.indexOf("chun-li");
// let result = ninjas.concat(["ken", "crystal"]);

// Destructive methods (alters the original value).
let result = ninjas.push("ken");
result = ninjas.pop();

console.log(result);
// jed, ryu, chun-li -- join
// 2 -- indexOf
// 4 -- concat
// ken -- Returns last value to be pulled

console.log(ninjas);
// [ "jed", "ryu", "chun-li", "ken", "crystal" ] -- concat (non-destructive)
// [ "jed", "ryu", "chun-li", "ken" ] -- push
// [ "jed", "ryu" ] -- pop

// .pop() does not take any arguments, it simply removes the last element
// .pop() returns the value of the last element and can be stored in a variable for later use.