// arguments & parameters

const speak = function (name = "luigi", time = "night" /*Parameters*/) {
  console.log(`good ${time} ${name}`);
};

speak();
speak("mario");
speak("mario", "morning" /*Arguments*/);

// Order of the arguments must match order of the parameters.
// Passing no arguments returns Undefined.
// Default values set to combat ^above.

/*
good night luigi
good night mario 
good morning mario
*/
