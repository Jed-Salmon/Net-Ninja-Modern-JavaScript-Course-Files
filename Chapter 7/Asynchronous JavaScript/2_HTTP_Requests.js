const getTodos = () => {};

const URL = "https://jsonplaceholder.typicode.com/todos/";
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", URL);

request.send();
