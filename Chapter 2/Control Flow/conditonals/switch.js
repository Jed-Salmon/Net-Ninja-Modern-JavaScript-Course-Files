// switch statement

// A switch statement is a better way to check multiple possible values of a single variable.

const grade = "50";

switch (grade) {
  case "50":
    console.log("You got an A!");
    break;
  case "B":
    console.log("You got an B!");
    break;
  case "C":
    console.log("You got an C!");
    break;
  case "D":
    console.log("You got an D!");
    break;
  case "E":
    console.log("You got an E!");
    break;
  default:
    console.log("Not a valid grade");
  // no break needed for default case
}

// switch statements use strict equality.
// Meaning ===, which takes into consideration the type, as well as the actual value.
