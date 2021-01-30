const URL = "https://jsonplaceholder.typicode.com/todoss/";

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", URL);

  request.send();
};

console.log(1);
console.log(2);

// convention is that the error always comes first, then the data
getTodos((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

/*
We've made our code more reusable by putting it inside a get to do's function.
Then we can call that function and get the to do's by passing a callback function
as an argument, we take that as a parameter and then we fire it, which either
returns the error or the data whether it's a success or not.
*/
