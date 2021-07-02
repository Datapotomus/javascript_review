"use strict";
console.log("dom.js");
let ex = (num) => console.log(`\nExercise ${num} output:\n`);

const button = document.querySelector("#buttonEx5");
const counter = document.querySelector("#counter");
const background = document.querySelector("body");
const tBody = document.querySelector("#quizQuestionsTable tbody");

// 9. Adding the function to the top of the page.
function randomColor() {
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  
  let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
  
  return colors[randomIndex]
}

/**
 * 1. What is the DOM in relation to web development?
 */

//It's the document object model. It's essentially the webpage 
//that you can manipulate.

/**
 * 2. On your own: What is the difference between document.getElementById() and 
 * document.querySelector().
 */
// The getElementById allows you to select elements on a webpage by the id specified. 
// document.querySelector() allows you to use most other HTML elements not just IDs. 
// Using almost CSS selectors.

/**
 * 3. What method could I use on the document object to find an HTML element by one of the 
 * classes in the elements class list if document.querySelector() was not available?
 */

// document.getElementsByClassName()

/**
 * 4. On your own: What is the difference between using *element*.addEventListener() 
 * vs *element*.onclick?
 */
// In many ways they work the same, but using addeventlistener seems to allow you to
// add more events if needed.

/**
 * 5. Add a button HTML element to the <body> of index.html and give the new button an id 
 *    attribute with a value of your choosing. You can just open the HTML file and add this. 
 *    For now, DO NOT put any text between the opening and closing button tags.
 *      Using JavaScript, get a reference to the button element using it's id and store it 
 *      in a variable. Print the value of the variable to the console to verify that you 
 *      were able to get a reference to the expected element.
 *      Using JavaScript, update the button element to have the text, "Click Me".
 *      Using JavaScript, update the button element to have white text and a black background.
 */

ex(5);

console.log(button);
button.textContent = "Click Me";
button.style.backgroundColor = "black";
button.style.color = "white";

/**
 * 6. Add an event listener to the button you created that responds to a click event. 
 * Print something to the console so you know that something happens when the button is 
 * clicked and your event listener is working.
 */
ex(6);
button.addEventListener("click", function () {
  console.log("clicked")
  counter.innerText = parseInt(counter.innerText) + 1;
  background.style.backgroundColor = randomColor();
})

// rollDice.addEventListener("click", function () {
//   let numberOfDice = numDice.value;
//   for (let index = 0; index < numberOfDice; index++) {
//     dieRolls.push(getDiceResult(1,6));
//   }


/**
 * 7. Add a span HTML element to the <body> of index.html after the button and give the new span 
 * an id attribute with a value counter. Use a 0 as the contents of your span.

 *    Using JavaScript, get a reference to the span element using it's id and store it in a 
 *    variable. Print the value of the variable to the console to verify that you were able 
 *    to get a reference to the expected element.
 *    Update the event listener for the button to increase the 0 in the span by one every 
 *    time the button is clicked.
 */
ex(7);
console.log(counter);

/**
 * 8. Add a new event listener to the button you created that responds to a right-click 
 *  event (the actual event is called something else). Print something to the console so
 *  you know that something happens when the button is right-clicked and your event listener
 *  is working.

      Be sure to use event.preventDefault(); near the top of the event listener.
      What behavior did adding event.preventDefault(); change?
      // The menu shows up if you don't have it.
      Update the new event listener for the button to decrease the number in the span by one every time the button is clicked.
 */

button.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log("right-clicked")
  counter.innerText = parseInt(counter.innerText) - 1;
  background.style.backgroundColor = randomColor();
});

/**
 * 9. Given the following function that returns a random color from an array, change the 
 * background color of the HTML document every time the button is clicked or right-clicked.
 */

// Added in the event listeners above.


/**
 * 10. Build the contents of a table with JavaScript
 */

/**
 * Using JavaScript, get a reference to the tbody element using document.querySelector() 
 * passing it the right selector to target the tbody of the table and store it in a 
 * variable. Print the value of the variable to the console to verify that you were able to 
 * get a reference to the expected element.
 */
ex(10)
console.log(tBody)
let quizQuestions = [
  {
      "id": 79680,
      "answer": "anarchy",
      "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
      "value": 1000,
      "airdate": "2007-02-27T12:00:00.000Z",
      "created_at": "2014-02-11T23:38:41.721Z",
      "updated_at": "2014-02-11T23:38:41.721Z",
      "category_id": 10459,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 10459,
          "title": "political science",
          "created_at": "2014-02-11T23:38:40.866Z",
          "updated_at": "2014-02-11T23:38:40.866Z",
          "clues_count": 5
      }
  },
  {
      "id": 79681,
      "answer": "Africa",
      "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
      "value": 1000,
      "airdate": "2007-02-27T12:00:00.000Z",
      "created_at": "2014-02-11T23:38:41.751Z",
      "updated_at": "2014-02-11T23:38:41.751Z",
      "category_id": 10460,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 10460,
          "title": "who says",
          "created_at": "2014-02-11T23:38:40.880Z",
          "updated_at": "2014-02-11T23:38:40.880Z",
          "clues_count": 5
      }
  },
  {
      "id": 79682,
      "answer": "yew",
      "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
      "value": 1000,
      "airdate": "2007-02-27T12:00:00.000Z",
      "created_at": "2014-02-11T23:38:41.780Z",
      "updated_at": "2014-02-11T23:38:41.780Z",
      "category_id": 10461,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 10461,
          "title": "also a 3-letter tree",
          "created_at": "2014-02-11T23:38:40.895Z",
          "updated_at": "2014-02-11T23:38:40.895Z",
          "clues_count": 5
      }
  },
  {
      "id": 79683,
      "answer": "Alvin Ailey",
      "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
      "value": 1000,
      "airdate": "2007-02-27T12:00:00.000Z",
      "created_at": "2014-02-11T23:38:41.809Z",
      "updated_at": "2014-02-11T23:38:41.809Z",
      "category_id": 10462,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 10462,
          "title": "prime madonna",
          "created_at": "2014-02-11T23:38:40.909Z",
          "updated_at": "2014-02-11T23:38:40.909Z",
          "clues_count": 5
      }
  },
  {
      "id": 79684,
      "answer": "Harry Potter",
      "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
      "value": 200,
      "airdate": "2007-02-26T12:00:00.000Z",
      "created_at": "2014-02-11T23:38:42.318Z",
      "updated_at": "2014-02-11T23:38:42.318Z",
      "category_id": 10463,
      "game_id": null,
      "invalid_count": null,
      "category": {
          "id": 10463,
          "title": "literary london",
          "created_at": "2014-02-11T23:38:42.190Z",
          "updated_at": "2014-02-11T23:38:42.190Z",
          "clues_count": 5
      }
  }
]
// quizQuestions.forEach(question => {
//   console.log(question.id)
//   let newTr = document.createElement('tr');
//   let tdID = document.createElement('td');
//   let tdQuestion = document.createElement('td');
//   let tdCategory = document.createElement('td');
//   let tdValue = document.createElement('td');
//   let tdAnswer = document.createElement('td');
//   tdID.append(question.id);
//   tdQuestion.append(question.question);
//   tdCategory.append(question.category.title);
//   tdValue.append(question.value);
//   tdAnswer.append(question.answer)
//   tBody.append(newTr);
//   newTr.append(tdID);
//   newTr.append(tdQuestion);
//   newTr.append(tdCategory);
//   newTr.append(tdValue);
//   newTr.append(tdAnswer);
// });


quizQuestions.forEach(question => {
  // console.log(question.id)
  let newTr = document.createElement('tr');
  let tdID = document.createElement('td');
  let tdQuestion = document.createElement('td');
  let tdCategory = document.createElement('td');
  let tdValue = document.createElement('td');
  let tdAnswer = document.createElement('td');
  tdID.append(question.id);
  tdQuestion.append(question.question);
  tdCategory.append(question.category.title);
  tdValue.append(question.value);
  tdAnswer.append(question.answer);
  tBody.append(newTr);
  newTr.append(tdID, 
              tdQuestion, 
              tdCategory, 
              tdValue, 
              tdAnswer);
});