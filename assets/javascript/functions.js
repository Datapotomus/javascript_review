"use strict";
console.log("functions.js");

// 1. Create a function named greeting that prints the "Hello World" to the console.

function greeting() {
  console.log("Hello World");
};
greeting();

/* 
2. Create a function named countingCharacters that takes a string as a parameter.
    If the length of the string is less than 10, print the strings length to the console
    If the string length is more than 10, print a message that the string is too long and include the string in the message.
*/

function countingCharacters(chars) {
  if (chars.length < 10) {
    console.log(chars.length);
  } else if (chars.length > 10){
    console.log(`String is too long: ${chars}`);
  }
};

countingCharacters("Hello");
countingCharacters("This should be longer than ten.")

/* 
3. Create a function named difference that accepts two numbers as parameters.
    If either of the parameters provided is not a number, the function should return the following error: "Input(s) must be a number!".
    It should return the difference if both parameters are numbers.
    Call the function within a console.log() statement to print the information returned from the function. This is different than having the function print to the console directly.
*/

function difference(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Input(s) must be a number!";
  }
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
console.log(difference("five",1));
console.log(difference(1,"four"));
console.log(difference(1,"4"));
console.log(difference(1,5));
console.log(difference(2,4));
console.log(difference(8,2));
console.log(difference(6,6));

function difference2(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Input(s) must be a number!";
  }
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
console.log(difference2("five",1));
console.log(difference2(1,"four"));
console.log(difference2(1,"4"));
console.log(difference2(1,5));


/* 
4. Using the function expression syntax, create a new function named advancedGreeting.
    It should accept hour as a parameter
    If the hour is less than 12, return a "Good morning" greeting
    If the hour is between 12 and 18, return a "Good afternoon" greeting
    If the hour is between 18 and 24, return a "Good night" greeting
    All other values should return "Invalid hour input".
*/

let advancedGreeting = function (hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour <= 18){
    return "Good afternoon";
  } else if (hour < 24){
    return "Good night";
  } else {
    return "Invalid hour input";
  }
}
console.log(advancedGreeting(8));
console.log(advancedGreeting(12));
console.log(advancedGreeting(18));
console.log(advancedGreeting(20));
console.log(advancedGreeting(24));

/*
5. Can we access variables created inside the scope of a function outside of that function? 
    We can't if we use let, we can if we use var.

Can a function access variables created in a parent scope?
    Yes, we can access variables in the parent.
*/ 