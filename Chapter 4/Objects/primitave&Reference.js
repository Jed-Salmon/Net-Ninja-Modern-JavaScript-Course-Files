// Primitive & Reference Types

// primitive types are stored in the stack. Stack can be accessed quickly but has a limited space.
// When creating reference types like object literals or arrays, this gets stored in the heap.
// The heap has more space available so it can hold bigger and more complex types, but it's a bit slower too.
// Reference types create a pointer in the stack. When the variable is called the stack points to the heap.

/*
when we make copies of primitive values like strings, numbers
and booleans, we make a new copy of the value on the stack.

When we make a copy of a reference type, we only make a copy of
the pointer on the stack, which points to the same data on the heap.
Meaning we don't make a copy of the actual data, so when we then change
the copies it does have an effect on the original value and vice versa.
*/

// Primitive values:
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`Score One: ${scoreOne}`, `Score Two: ${scoreTwo}`); // Score One: 50 Score Two: 50

scoreOne = 100; // Redefine the value
console.log(`Score One: ${scoreOne}`, `Score Two: ${scoreTwo}`); // Score One: 100 Score Two: 50

// When we make a copy of primitive values, if we change one of them it doesn't affect the other.

// reference values:
const userThree = { name: "ryu", age: 30 }; // Object is stored on the heap.
const userFour = userThree; // Creates a copy
// Doesn't copy the object itself, just copies the pointer on the stack.

console.log(userThree, userFour);
// Object { name: "ryu", age: 30 } > Object { name: "ryu", age: 30 }

userThree.age = 40; // Redefine the value
console.log(userThree, userFour);
// Object { name: "ryu", age: 40 } > Object { name: "ryu", age: 40 }

userThree.name = "chung-li"; // Redefine the value
console.log(userThree, userFour);
// Object { name: "chung-li", age: 40 } > Object { name: "chung-li", age: 40 }

/* 
Since it's only stored ONCE on the heap, if we change the value
it's changing it on the heap and then both of the pointers 
(user 3 & 4) are pointing to that same object.
*/
