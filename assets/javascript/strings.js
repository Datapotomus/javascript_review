console.log("strings.js");

// #1 Creating 5 variables
let verb = "run";
let noun = "house";
let adjective = "damp";
let color = "green";
let nameVar = "Matt";

// #2 creating madlib variable
let madlib = nameVar + " will not " + verb + ". \n" + "Unless, you clean up the " + adjective +  " " + color + " " + noun + "."

console.log(madlib)

// #3 creating madlibLiteral variable, and using ticks
let madlibLiteral = `${nameVar} will not ${verb}.
Unless, you clean up the ${adjective} ${color} ${noun}.`

console.log(madlibLiteral)

// #4 You can use the .toString function.

let numTest = "4"

numString = numTest - 0

console.log(typeof parseInt(numTest))
console.log(typeof numTest)
console.log(typeof numString)

