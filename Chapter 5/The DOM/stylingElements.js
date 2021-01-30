const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 25px"); // adds margin but overwrites title color

console.log(title.style); // list all styles
console.log(title.style.color);

title.style.margin = "25px"; // just adds the new style property
title.style.color = "crimson";
title.style.fontSize = "50px"; // Always use camel casing (border-radius = borderRadius)

// Delete a style
title.style.margin = ""; // empty string removes the property

// best practice to style within the .css file then add the class within JavaScript
// Rather than styling the element itself using JavaScript. (see addRemoveClasses).
