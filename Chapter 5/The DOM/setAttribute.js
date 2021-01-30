// get & set HTML attributes

const link = document.querySelector("a");

console.log(link.getAttribute("href")); // pass in as argument what attribute we want
// Returns the value of the href attribute

// Change or set an attribute
link.setAttribute("href", "https://www.jedsalmon.com");
link.innerText = "Come Visit My Website!";
// First param is the attribute you want to change
// Second param is the value you want to change it to

const msg = document.querySelector("p.error");
console.log(msg.getAttribute("class")); // returns class name (error)
msg.setAttribute("class", "success"); // changes class to success

// Set an attribute to an element which doesn't exist in the HTML:
msg.setAttribute("style", "color: green"); // If it doesn't exist, JavaScript will create it

// Set attribute has a major downside to it. This is covered the following lecture (.js)
// Set attribute overwrites any existing styling found on the element
