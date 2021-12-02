/* Goals: 
- Create a quiz game that begins after selecting the "start quiz" button.
- On "start quiz" click, a timer begins counting down
  > if it reaches 0 the game ends; if the user answers all the questions, the game ends
- user is displayed a question with 4 multiple choice answers
  > if correct answer chosen briefly display "correct" in footer message container  
  > if incorrect answer chosen briefly display "wrong" in the foot message container 
=======================================================
- Heavily comment use of javascript for personal studies and future refactoring project
- Use codepen.io to rapid test code before pushing code
=======================================================
JS Reference material and tutorials:
youtube searches:
  kevin powell 
  webdevsimplified tutorials * quiz logic references
  clever programmer tutorials * quiz logic and array method references
  keith paterson - for submit references
docs:
  w3schools
  MDN
/* 
// var taskInfoEl = document.createElement("div");  *UTILITY - for creating elements - Taskinator
//*UTILITY from Taskinator to prevent submit from refreshing page - use for name/initial submission or link to new page
// var taskFormHandler = function(event) {
//   event.preventDefault();
//   var taskNameInput = document.querySelector("input[name='task-name'").value;
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;
// ====================================================================================================
*/

var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var answerButton = document.getElementsByClassName('answer-button') //grabs buttons div
var quizAnswers = document.getElementById('quiz-answers')
var answerMessage = document.getElementsByClassName('answer-msg')
var currentQuestionIndex = 0
var score = 0


  
  
  // function to start game, start countdown timer
  //TODO: Timer countdown
  function startGame() {
    // console.log(questions[currentQuestionIndex].answers, questions[currentQuestionIndex].answers)
    startButton.classList.add('hide') 
    quizAnswers.classList.remove('hide')  
  
    setQuestion()
}

//create eventListener to check answer and remove time if the answer is not true**
//add points to score if answer is true
function setQuestion() {
  
  //set question from array 
  questionContainerEl.innerText = questions[currentQuestionIndex].question
  
  //set answers
  answerButton[0].textContent = questions[currentQuestionIndex].answers[0];
  answerButton[1].textContent = questions[currentQuestionIndex].answers[1];
  answerButton[2].textContent = questions[currentQuestionIndex].answers[2];
  answerButton[3].textContent = questions[currentQuestionIndex].answers[3];

  //capture button click and check answer
  for (i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener('click', checkAnswer);
  }
}

function checkAnswer(e) {
  //check if button click is the correct answer by comparing .textContent
  if (e.target.textContent === questions[currentQuestionIndex].answer){
    // if correct display "correct" message for a second
    answerMessage.textContent = "Correct"
  }
}



//create an object for questions to hold the values of the question and answers for the 
//use [] to nest arrays of information within another array, utilize to keep code clean and organized
//questions array -> can be saved as separate file to reference in html TODO*
var questions = [
  {
    question: 'Does this javascript quiz work?',  //define the question
    answers: ["Kinda", "No", "Yes", "Grapefruit"],  //answers array to populate answer button text
    answer: "Yes"
  },
  {
    question: "Which is used to manipulate the styling of a website?",
    answers: ["TSA", "CSS", "MBA", "FBI",],
    answer: "CSS"
  },

  {
    question: "What is the best Kurt Russel movie of all time? (hint: any)",
    answers: ["Big Trouble in Little China", "The Thing", "Escape from NY", "Escape from LA"],
    answer: ["Big Trouble in Little China", "The Thing", "Escape from NY", "Escape from LA"]
  },
  
    {
      question: "What is var short for?",
      answers: ["Vary", "Varonica", "Variable", "Varnish"],
      answer: "Variable"      
    },
]

//click event listener used to capture button click, calls starGame function
startButton.addEventListener('click', startGame)