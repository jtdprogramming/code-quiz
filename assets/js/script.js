/* Goals: 
- Create a quiz game that begins after selecting the "start quiz" button.
- On "start quiz" click, a timer begins counting down
  > if it reaches 0 the game ends; if the user answers all the questions, the game ends
- user is displayed a question with 4 multiple choice answers
  > if correct answer chosen briefly display "correct" in footer message container  
  > if incorrect answer chosen briefly display "wrong" in the foot message container 
=======================================================
Heavily comment use of javascript for personal studies
=======================================================
/* 
Question container functionality:
Title: question goes here and changes wit

*/
    //*UTILITY from Taskinator to prevent submit from refreshing page
// var taskFormHandler = function(event) {
//   event.preventDefault();
//   var taskNameInput = document.querySelector("input[name='task-name'").value;
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;

let questionContainerElement = document.getElementById('question-container')    //can use var or const depending on data type
let startButton = document.getElementById('start-btn')


startButton.addEventListener('click', startGame)

function startGame() {
  // console.log('Button Test')    
  startButton.classList.add('hide')    //classList.add and classList.remove to manipulate any elements **Utility 

}

function setNextQuestion() {

}

function selectAnswer() {

}