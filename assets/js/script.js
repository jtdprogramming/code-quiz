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

/*
var questionContainerElement = document.getElementById('question-container') ;   //can use var, let, or const (and others) depending on data type
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var score = 0;
var currentQuestionIndex;  //with no value assigned is 'undefined'
var shuffledQuestions;
var randNum = .5;
var questionElement = document.getElementById('question'); //grab question div
var answerButtonsElement = document.getElementById('answer-buttons'); //grabs buttons div




//click event listener used to capture button click, begins starGame function
startButton.addEventListener('click', startGame)


//on button click hide the start button and show question container
function startGame() {
  // console.log('Button Test')    
  startButton.classList.add('hide'); 

    //**sort() function used to sort question array * utilize math random from pass-gen to return pseudo random number
  shuffledQuestions = questions.sort(() => Math.random());   //() => Math.random() - randNum to define random number 
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');  //classList.add and classList.remove to manipulate any elements **Utility 
  setNextQuestion();   
}



function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]); 
}

//take current sorted question at and show content based on questions
//create eventListener to check answer and remove time if the answer is not true**
//add points to score if answer is true
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    if (answer.correct) {
      button.dataset.correct = answer.correct;
      score = score + 5;
      console.log(score)

    }
      button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  }
  ); 
}


// on answer select 
function selectAnswer(event) {
  var selectedButton = event.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)






*/
//==============================================================================



var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var answerButtonsElement = document.getElementById('answer-buttons'); //grabs buttons div

//create an object for questions to hold the values of the question and answers for the 
//use [] to nest arrays of information within another array, utilize to keep code clean and organized
var questions = [
  {
    question: 'Does this javascript quiz work?',  //define the question
    answers: [                                    //create an array of answers that holds answer-btn text and string value
      {text: 'Kinda', correct: false},            
      {text: 'No', correct: false},
      {text: 'Yes', correct: true},
      {text: 'Grapefruit', correct: false},
    ]
  },
  {
    question: 'What is used to manipulate the styling of a website?',
    answers: [
      {text: 'TSA', correct: false},
      {text: 'CSS', correct: true},
      {text: 'MBA', correct: false},
      {text: 'FBI', correct: false},
    ]
  },

  {
    question: 'What is the best Kurt Russel movie of all time? (hint: any)',
    answers: [
      {text: 'Big Trouble in Little China', correct: true},
      {text: 'The Thing', correct: true},
      {text: 'Escape from NY', correct: true},
      {text: 'Escape from LA', correct: true},
    ]
  },
  
    {
      question: 'What is var short for?',
      answers: [
        {text: 'Vary', correct: false},
        {text: 'Varonica', correct: false},
        {text: 'Variable', correct: true},
        {text: 'Varnish', correct: false},
      ]
    },
]

//click event listener used to capture button click, calls starGame function
startButton.addEventListener('click', startGame)
  
  
  // function to start game, start countdown timer
  //TODO: Timer countdown
  function startGame() {
    console.log('button test')
    console.log(questions[0].answers)
    console.log(questions)

    startButton.classList.add('hide')    
    console.log('hidden button')

    setQuestion()
}

//create eventListener to check answer and remove time if the answer is not true**
//add points to score if answer is true
function setQuestion() {
  
  questionContainerElement.innerText = questions.question[0];
  console.log(questionContainerElement.innerText)


  // questions.answers.forEach(answers => {
  //   var button = document.createElement('button')
  //   button.innerText = answers.text
  //   button.classList.add('btn')

  //   if (answers.correct) {
  //     button.dataset.correct = answers.correct;
  //     score = score + 5;
  //     console.log(score)

  //   }
  //     button.addEventListener('click', selectAnswer)
  //   answerButtonsElement.appendChild(button)
  // }
  // ); 
}

// function to load question and answers into buttons, check if answer is correct



