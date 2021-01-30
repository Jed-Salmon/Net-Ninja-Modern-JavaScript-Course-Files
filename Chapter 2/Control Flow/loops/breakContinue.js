// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue; // Ignore following code (if true, then skip the score log of 0)
    // returns back up to loop the next number (the next iteration: 30).
  }

  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!");
    break; // Breaks out of the loop. It stops at 100 and not iterate over the last two elements.
  }
}

// Continue breaks out the current loop and continues with the next iteration.
// Break closes out of the loop entirely.
