// returning values

// const calcArea = function (radius) {
//   let area = 3.14 * radius ** 2;
//   // console.log(area); -- Calculates area but it's not reusable (not stored in system memory)
// };
// console.log(area); -- area is not defined because it's a local variable stored inside the function.

const calcArea = function (radius) {
  return 3.14 * radius ** 2;
  // return area;
};

const area = calcArea(5); // Function is called, then returns the area here.
// Area is set equal to this new constant which has a global scope.
// We're simply storing the value that's returned back (regardless of what it's called) here inside this new constant.

console.log(area);

// We can also reuse a value that a function brings back to us
// Takes area and expand upon it:
const calcVol = function (area) {};

calcVol(area);
