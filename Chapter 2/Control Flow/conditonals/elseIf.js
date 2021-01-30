// else if statements

let password = "p@ssword1234"; // that pass word is mighty strong
password = "password1234"; // that password is strong enough
password = "password"; // that password is strong enough
password = "p@ss"; // that password is not strong enough
password = "p@ss5"; // that password is strong enough (includes @, AND is >= 5)

// if (password.length >= 12) {
//   console.log("that password is mighty strong!");
// } else if (password.length >= 8) {
//   console.log("that password is long enough");
// } else {
//   console.log("password is not long enough!");
// }

// Logical Operators || OR -and- && AND
if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong!");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 5)
) {
  console.log("that password is strong enough");
} else {
  console.log("password is not strong enough!");
}
