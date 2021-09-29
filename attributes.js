// Use the element attribute functions to manipulate the HTML elements' styles in index.html.
// The element attribute functions to use:
//   getAttribute: https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
//   setAttribute: https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
//   removeAttribute: https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
//
// Note: You'll also need to use "document.querySelector" to grab the elements out of the DOM.

// 1) The body's "class" attribute styling is being overwritten by
//    the "style" attribute styling. Remove its "style" attribute.
let body = document.querySelector("body");
body.removeAttribute("style");
// 2) The crow image is floating to the right due to its "class" attribute.
//    We want it to float to the left instead. Set its "class" attribute
//    to the correct class name, replacing the incorrect one.
//    (See: styles.css for the class)
let img = document.querySelector("img");
img.setAttribute("class", "float-left");
// 3) The heading color isn't set. We have a class ready to be apply its color though.
//    (See: styles.css for the class)
let h1 = document.querySelector("h1");
h1.setAttribute("class", "heading-color");

// 4) The main text color isn't being applied correctly because the "id" attribute
//    name is incorrect. Set the correct "id" attribute name. (See: styles.css for the id)
let p = document.querySelector("p");
p.setAttribute("id", "main-text");
// 5) Retrieve and print the "alt" attribute of the image using a "console.log"
console.log(img.getAttribute("alt"))