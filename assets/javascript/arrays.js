"use strict";
console.log("arrays.js");

/**
 * 1. What are two ways you can create an array in JavaScript?
 *    let array = [];
 *    let array = Array.of(1,2,3); <- some values for the array.
 */

/**
 * 2. How we can we tell if a variable is holding an array?
 *      Calling isArray function.
 *      Array.isArray(myArray);
 */
let myArray = [];
myArray[0] = "matt";
console.log(Array.isArray(myArray));

/**
 * 3. What data type is returned from an array with the typeof?
 *      It returns an object.
 */

console.log(typeof myArray);

/**
 * 4. What is an index in the context of an array?
 *      An index is the "spot" where you are at in an array. It's like a pointer to the 
 *      location of a value.
 */

/**
 * 1. Given the following array, const carMakes = ["Honda", "Toyota", "Mazda"]
 *    On a separate line use a built in array method to add "Mercedes" to the end of the array
 *    On a separate line use a built in array method to add "BMW" to the beginning of the array
 *    Print "Toyota" to the console accessing it by it's index
 */

const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
carMakes.unshift("BMW");
console.log(carMakes.indexOf("Toyota"));
console.log(carMakes[carMakes.indexOf("Toyota")]);

/**
 * 6. Using a built in array method, create a new array from the first 3 values in the carMakes array and store it in a new variable. 
 * Your new array should contain the values ["BMW", "Honda", "Toyota"]
 */

let newCarMakes = carMakes.slice(0, 3)
console.log(newCarMakes);

/**
 * 7. Using built-in Array Methods and working with this array: const ericInfo = ["Eric", "Senior Instructor", "Florida"];
 *      Remove "Eric" from the ericInfo array
 *      Update "Florida" to "South Carolina"
 *      Add "Schwartz" to the end of the array
 *      The final array should look like this: ["Senior Instructor", "South Carolina", "Schwartz"]
 *      Please feel free to look up array methods that you can use to accomplish the transformation above.
 */

const ericInfo = ["Eric", "Senior Instructor", "Florida"];
ericInfo.shift();
console.log(ericInfo)
ericInfo.splice(ericInfo.indexOf("Florida"), 1, "South Carolina")
console.log(ericInfo)
ericInfo.push("Schwartz")
console.log(ericInfo)

/**
 * 8. Print "apple" from each of the arrays below to the console
 */

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];
console.log(fruits1[fruits1.indexOf("apple")], fruits1.indexOf("apple"));
console.log(fruits2[2][1]);
console.log(fruits3[1][1][1][0]);


// fruits3.forEach(element => {
//   console.log(element)
// });

/**
 * 9. Loop through the following array with a for() or while() loop printing each name to the console.
 */
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"];
for (let index = 0; index < studentsArray.length; index++) {
  console.log(studentsArray[index]);
}

/**
 * 10. Loop through the following array with the forEach() Array method printing each name and the names index to the console.
 */

/*
Example Output:
0: Ashley
1: Craig
...
*/

studentsArray.forEach(element => {
  console.log(`${studentsArray.indexOf(element)}: ${element}`)
});

/**
 * 11. Using the the map Array method square every number in the following array and save the results to a new array called numbersSquaredArray.
 */

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numbersSquaredArray = numbersArray.map(x => x * 2);
console.log(numbersSquaredArray)

/**
 * 12. Using a looping method of your choice, loop over and sum all the values the new numbersSqauredArray 
 *    storing the sum in a variable named arraySum. Print arraySum to the console.
 */
let arraySum = 0;
numbersSquaredArray.forEach(element => {
  arraySum += element;
});
console.log(arraySum)
/**
 * 13. Given the following array, use a built-in array method to check if the array contains 
 *    "Luke Skywalker" and if it does, print it's index to the console.
 */
const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

if (starWarsCharactersArray.indexOf("Luke Skywalker") !== -1) {
  console.log(starWarsCharactersArray.indexOf("Luke Skywalker"));
}