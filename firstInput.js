const userInput = require("prompt-sync")();

const name = userInput("Enter name: ");
let age = userInput("Enter age: ");
let complexion = userInput("Enter your complexion: ");
const school = userInput("Enter school attended: ");
let hobby = userInput("Enter your hobby: ");


console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I am ${complexion} in complexion`);
console.log(`I attended ${school}`);
console.log(`I love ${hobby}`);


console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(complexion));
console.log(typeof(school));
console.log(typeof(hobby));
