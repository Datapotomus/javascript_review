"use strict";
console.log("objects.js");

let ex = (num) => console.log(`\nExercise ${num} output:\n`);

// function ex(num){
//   console.log(`\nExercise ${num} output:\n`);
// }

/**
 * 1. Create an object that represents a person
 *    The object should have a name, an age, and a favorite color.
 *    using console.log() outside of the object, access the properties of the object to print: "Hello, My name is name. I am age years old and my favorite color is favoriteColor". Replacing the italic words with the correct property from the object.
 */
ex(1);
let person = {
  name: "Matt",
  age: 36,
  favoriteColor: "purple",
  sayHello: function(){
    return `Hello, My name is ${this.name}. I am ${this.age} years old and my favorite color is ${this.favoriteColor}.`
  }
}

console.log(`Hello, My name is ${person.name}. I am ${person.age} years old and my favorite color is ${person.favoriteColor}.`)

/**
 * 2. Add a method called sayHello to the person 
 *    object created above that returns the same message 
 *    that the previous console.log() printed to the console. 
 *    Be sure to use the properties within the object to replace the italicized words. 
 *    Below the object, call the new method within a console.log() statement.
 */
ex(2)
console.log(person.sayHello())


/**
 * 3. Given the object below that represents a student, add 
 * a method averageGrade that returns the average grade for 
 * the student by averageing the students gradesArray. 
 * Make sure you test the method by printing the average grade to the console.
 */
ex(3);

let studentBob = {
  name: "bob",
  age: 23,
  major: "Psychology",
  grades: [70, 92, 84, 75, 100],
  averageGrade: function(){
    return this.grades.reduce((a, b) => a + b) / this.grades.length;
  },
  printDetails: function(){
    return `Hello, My name is ${this.name} and I am a student. I am ${this.age} years old and my major is ${this.major}. My current average grade is ${this.averageGrade()}.`
  }
}
console.log(studentBob.averageGrade())

/**
 * 4. Add a new method to the studentBob object called printDetails that prints: "Hello, My name is name and I am a student. 
 * I am age years old and my major major. My current average grade is averageGrade.
 */
ex(4);
console.log(studentBob.printDetails())

/**
 * 5. Loop through the following array of objects and print out the name property of each 
 *    object to the console. As a bonus, see if you can find a string method that would make 
 *    the names appear with all uppercase letters when printed.
 */
ex(5);
const charactersArray = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

charactersArray.forEach(character => {
  console.log(character.name.toUpperCase())
});

/**
 * 6. Using the Array.filter() method on charactersArray, 
 *    create a new array called filteredCharactersArray that only contains characters 
 *    where the mass is greater than 80.
 */
ex(6);

let filteredCharactersArray = charactersArray.filter(character => character.mass > 80 );
console.log(filteredCharactersArray)

/**
 * 7. Using the Array.map() method on charactersArray, create a new array called 
 * characterNames that only contains names of each character as a string.
 */
ex(7);

let characterNames = charactersArray.map(character => character.name )
console.log(characterNames.toString())

/**
 * 8. Using the Array.some() method on charactersArray. Check to see if a character 
 *    has blue eyes. If they do, print "Some characters have blue eyes" otherwise 
 *    print "No characters have blue eyes" to the console.
 */
ex(8);
const eyeCheck = (character) => character.eye_color === "blue";

if(charactersArray.some(eyeCheck)){
  console.log("Some characters have blue eyes");
}else {
  console.log("No characters have blue eyes");
};

/**
 * 9. Using the Array.every() method on charactersArray. Check to see if all characters 
 * are male. If they every character is male, print "All the characters are male" to 
 * the console.
 */
ex(9);
const isMale = (character) => character.gender === "male";

if (charactersArray.every(isMale)){
  console.log("All the characters are male")
}else {
  console.log("All the characters are not all male")
}

/**
 * 10. Using a loop or Array.reduce() calculate the total mass of all the characters. 
 *    Print the total mass to the console.
 */
ex(10)
let totalMass = 0;

charactersArray.forEach(character => {
  totalMass += parseInt(character.mass);
});
console.log(totalMass)

let massTotal = charactersArray.reduce(function (a, b) {
  return {mass: parseInt(a.mass) + parseInt(b.mass)}; 
})
console.log("Reduce Function:",massTotal.mass)

let massTotal2 = charactersArray.reduce((a, b) => ({mass: parseInt(a.mass) + parseInt(b.mass)}));
console.log("Reduce Arrow Function:",massTotal2.mass)

// Adding this as another way to solve it. One note, is for this you need to have the 0 at the end.
// That tells it to start with a number 0, and then increment. 
let massTotalEric = charactersArray.reduce((total, currentCharacter) => total + parseInt(currentCharacter.mass), 0);
console.log("Eric's Solution", massTotalEric)                                                                 

/**
 * 11. Create a function called tagFavorite that takes an array as one parameter and a 
 *    string that represents your favorite character's name as another parameter. This 
 *    function does not need to return anything.
 *      Create a loop inside the function that loops over the array passed in.
 *      Add a property to each object in the array called favoriteCharacter and default it to false
 *      If the character name matches the character name passed in, set the favoriteCharacter property to true for that character's object
 *      Test your function by passing in the charactersArray and your favorite character's name when running the function. Print the charactersArray after you run the function to ensure the objects updated properly.
 */
ex(11);
function tagFavorite(tagArray, favChar){
  tagArray.forEach(character => {
    if (character.name === favChar){
      character.favoriteCharacter = true;
    } else {
      character.favoriteCharacter = false;
    }
  });
}

tagFavorite(charactersArray, "Luke Skywalker");
console.log(charactersArray)

//Working on Deb's issue
ex("Deb's method")
let debCharactersArray = Object.create(charactersArray)

function tagFavorite(newArray, favoriteCharacter){
  for (let i=0; i < newArray.length; i++){
    newArray[i].likesCheese = false
    if (favoriteCharacter === newArray[i].name) {
      newArray[i].likesCheese = true
    }
  }
}
tagFavorite(debCharactersArray,"Leia Organa")
console.log(debCharactersArray)