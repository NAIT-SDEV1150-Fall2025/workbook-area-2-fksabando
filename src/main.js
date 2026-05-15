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
//const continueDemo = confirm(`Hi ${userName} , shall we continue the demo?`);
//console.log('User chose to confirm', continueDemo);
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

let x = 10;
let y = 5;
console.log (`${x} + ${y} =`, x + y); // ` means f string in JS
console.log (`${x} - ${y} =`, x - y); // $ means f string in JS 
console.log (`${x} * ${y} =`, x * y);
console.log (`${x} / ${y} =`, x / y);

x = x + 1 ; // this means add one and assign it back to x
x += 1 ; // same thing as above
x = x++ ; //same as above
x = x - 1; //same thing as below
x -= 1 ; //subract 1 and assign back to x

x * 1; //multiply with one and assign back
console.log(x)

10 % 3; // 1 (remainder) modulo

// Increment / Decrement
let c = 5; c++; // 6
let d = 5; d--; // 4

//Assignment Operators
let a = 10; // assign 10
a += 5;     // 15
a -= 3;     // 12
a *= 2;     // 24
a /= 4;     // 6
a %= 4;     // 2
//composite data types
//array
const fruits = ["apple", "banana", "cherry"]; //square brackets with commas identify arrays in JS
const numbers = [1,2,3];
const mix = [1, "name",true];
//object
//comprises of key value pairs
const person = {1:"name", 2: "age", 3: "height"} //curly brackets are the identification of dictionary or object in JS
// 1:"name" 1 is the key and "name" is the value
// can have any primitive/composite data type in keys/values
const PERSON = {
    "name": "Kyle",
    "age": 22,
    "height": '4" 11"',
    "weight": "52kg"
};
console.log(PERSON,person);
const person = { name: 'Harry', age: 21 };
