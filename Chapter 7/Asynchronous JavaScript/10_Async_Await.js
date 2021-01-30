// async & await
// allows us to chain promises together in an easier and more readable way

const getTodos = async () => {
  const response = await fetch("./todos/luigi.json");
  // await stalls JavaScript. It stops it from assigning a value to the variable until resolved
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);

// We still need to call .then when calling an asynchronous function.
// Async await just reduces the need for .then inside the function itself
getTodos().then((data) => console.log("resolved:", data));

console.log(3);
console.log(4);

const test = getTodos();
console.log(test); // test = promise
// when we call an asynchronous function, it will always return a promise
