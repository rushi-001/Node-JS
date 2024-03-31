//* >>> first code in node 

// console.log("It's Node.js");

//* >>> modules and how to import them
//* > modules are reusable block of code that encapsulates related functionality 

// const mathJs = require("./math.js"); //* > for importing modules

// console.log(mathJs.add(2, 1));
// console.log(mathJs.sub(2, 1));

//* > also write like this 

const { add, sub } = require("./math.js");

console.log(add(2, 1));
console.log(sub(2, 1));
