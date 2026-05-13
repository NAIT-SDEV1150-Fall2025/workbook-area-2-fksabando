console.log('Lesson 03 starter loaded'); //semi-colon is a print statement in JS (end of the line)
const greeting = "hello, World!";// This is string
let count = 3; //This is a integer
var name = "true";//boolean
console.log(name, count, greeting); 
var n;
n=1;
console.log(n);
console.log(typeof 2);
//alert("Welcome to the demo.");
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} , shall we continue the demo?`);
console.log('User chose to confirm', continueDemo);
const strNumber = '42';
const parsedNumber = parseInt(strNumber,10)
console.log(`Parsed "${strNumber}" to number: $(parsedNumber}`);
const actualString = parsedNumber.toString()
console.log(actualString);

// Instructor TODO: 
// 1. Declare variables using var, let, const
// 2. Log their types with console.log(typeof …)
// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
// 4. Manipulate values and observe results in the console

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age