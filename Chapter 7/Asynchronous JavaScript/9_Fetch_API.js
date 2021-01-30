// fetch api
fetch("./todos/luigi.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json(); // gets the response data and parses it
    // .json() returns us a promise. This means we can't assign it a variable.
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

// (1) we fetch the data
// (2) we take the response and we return the response using .json
// (3) Step 2 returns a promise, so we then can tack on .then to retrieve the data
// (4) we can use .catch to catch any errors

// fetch api promise are only rejected when we get a network error (offline, or failure to retrieve api)
// if we mistype the url or end-point of the resource, it is still resolved and we don't get the reject response.
// we still get a status of 404 inside the resolve if url is wrong. So we will need to check for this!
