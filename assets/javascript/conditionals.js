"use strict";
console.log("conditionals.js");

// #1: Two Variables 
let x = 1;
let y = 2;

// #2: If statement saying if x is greater than y.
if (x > y) {
  console.log("Hello World")
// #3 Adding another statement saying that if y is equal or greater
}else if (x <= y){
  console.log("GoodBye World")
}

// #4 0, null, undefined, false

// #5 This block
/*
}else if("0" == 0){
    console.log("condition 5 is true")
*/

// #6 The === also compares type and just not the value. You should always try to use ===.

// #7 Refactored
function sayHello(name){

  return (name) ? `Hello, ${name}` : "Hello, person!";
} 

console.log( sayHello("Class") )                                                                                                                                                      

// #8 Comes back as I got tickets.

// #9

let soldOut = true;
let onSale = true;
let message = "";

soldOut = !soldOut

if (!soldOut && onSale) {
  message = "I got tickets"
}else {
  message = "I did not get tickets"
}

console.log(message);