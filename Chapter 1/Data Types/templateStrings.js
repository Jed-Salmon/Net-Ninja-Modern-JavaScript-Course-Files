// template strings
const title = "Best reads of 2019";
const author = "Mario";
const likes = 30;

// concatenation way
let result1 =
  "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result1);

// template string way (template literal)
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);
