"use strict";
console.log("loops.js");

// 1. Write a for loop that counts from 0 to 100, printing each number to the console.

for (let index = 0; index <= 100; index++) {
  console.log(index)
}

// 2. Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.
for (let index = 0; index <= 100; index += 2) {
  console.log(index)
}

// 3. Write a for loop that counts down from 100 to 0, printing each number to the console.

for (let index = 100; index > 0; index--) {
  console.log(index)
}

// 4. Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console.
for (let index = 0; index <= 50; index++) {
  if (index % 2 !== 0 && index % 5 === 0) {
    console.log(index)
  }
}

/* 5. Keeping track of a total with a loop.
    Create a variable called total and assign it a value of 0 (make sure total is defined outside of your loop).
    Create a loop that counts from 1 to 10, incrementing by 1.
    On each iteration of the loop, add 3 to the sum variable in step 1.
    After your loop, print the value of total to the console.
*/

let total = 0;

for (let index = 1; index <= 10 ; index++) {
  total += 3
}
console.log(`Total after loop is ${total}`)

// 6. Refactor the last questions loop to use the while() loop syntax

let i = 1;
let totalWhile = 0;
while (i <= 10) {
  totalWhile += 3
  i++
}
console.log(`Total after while loop is: ${totalWhile}`)

// 7. What do the continue and break statements do in JavaScript in the context of a loop?

/*
The break statement pulls you out of the loop entirely.
The continue statement skips one iteration of the loop.
*/


/* 8. Fizz Buzz Interview Question

    Write a loop that prints all numbers from 1 - 100.
    If a number is divisible by 3 log "Fizz" instead of the number.
    If a number is divisible by 5 log "Buzz" instead of the number.
    If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/

for (let index = 1; index < 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz")
  } else if (index % 3 === 0){
    console.log("Fizz")
  } else if (index % 5 === 0){
    console.log("Buzz")
  } else {
    console.log(index)
  }
  
}

// 9. Why is the difference between the do...while() and the while() or for() loop?
/*
The do while loop will go through at least one iteration of the loop regardless of the 
condition.
The while loop will keep iterating (looping through the code) while the condition is true.
The for loop has the counter and conditions built-in to the start of the loop. 
*/