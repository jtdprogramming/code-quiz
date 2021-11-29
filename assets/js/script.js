/* Goals: 
- Create a quiz game that begins after selecting the "start quiz" button.
- On "start quiz" click, a timer begins counting down
  > if it reaches 0 the game ends; if the user answers all the questions, the game ends
- user is displayed a question with 4 multiple choice answers
  > if correct answer chosen briefly display "correct" in footer message container  
  > if incorrect answer chosen briefly display "wrong" in the foot message container 
=======================================================
- Heavily comment use of javascript for personal studies and refactoring project
- Use codepen.io to rapid test code
=======================================================
JS Reference material and tutorials:
youtube:
  kevin powell 
  webdevsimplified  
  clever programmer
  keith paterson
docs:
  w3schools
  MDN
/* 
Question container functionality:
Title: question goes here and changes wit


// var taskInfoEl = document.createElement("div");  *UTILITY - for creating elements - Taskinator

//*UTILITY from Taskinator to prevent submit from refreshing page - use for name/initial submission or link to new page
// var taskFormHandler = function(event) {
//   event.preventDefault();
//   var taskNameInput = document.querySelector("input[name='task-name'").value;
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;

// ====================================================================================================
*/
var questionContainerElement = document.getElementById('question-container') ;   //can use var, let, or const (and others) depending on data type
var startButton = document.getElementById('start-btn');

//click event listener used to capture button click, begins starGame function
startButton.addEventListener('click', startGame)


//on button click hide the start button and show question container
function startGame() {
  // console.log('Button Test')    
  questionContainerElement.classList.remove('hide');  //classList.add and classList.remove to manipulate any elements **Utility 
  startButton.classList.add('hide'); 
  setNextQuestion();   

}





//create an object for questions to hold the values of the question and answers for the 
//use [] to nest arrays of information with another array, utilize to keep code clean and organized
var questions = [
  {
    question: 'Does this javascript quiz work?',
    answers: [
      {text: 'Kinda', correct: false},
      {text: 'No', correct: false},
      {text: 'Yes', correct: true},
      {text: 'Grapefruit', correct: false},
    ]
  }
]