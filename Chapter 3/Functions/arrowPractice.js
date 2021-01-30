// practice arrow functions

// regular function
const reg = function () {
  return "regular function";
};

// arrow function version
const greet = () => "hello, world";
const result = greet();
console.log(result);

// regular function
const regBill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(regBill([10, 15, 30], 0.2)); // Returns 66
// We directly log to console, instead of storing it in a variable.

// arrow function version
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2));

// The function has lot more logic (let, for), so we can't simplify to one line.
