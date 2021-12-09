# code-quiz

[Code-Quiz](https://jtdprogramming.github.io/code-quiz/)

[Code-Quiz-Repository](https://github.com/jtdprogramming/code-quiz)

![Code-Quiz]
* * *

## About

The objective is to create a quiz game which will ask several multiple choice questions. Once the game has ended either by answering all the questions or the timer running out, the user may enter their name and view their high scores from local storage.

* * *

### Acceptance Critera
```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
* * *

### Todo
```
- [ ] 1. Open page with instructions and initial entry
        a. enter name for high score log
        b. submit name to begin quiz and start timer
- [ ] 2. On start begin timer and populate question and answer buttons into html 
- [ ] 3. On answer submission determine if answer it correct 
        a. display "correct" or "wrong" indicator 
        b. calculate score based on answer
- [ ] 4. create timer to determine when game is over
        a. deduct time on wrong answer
        b. when timer = 0 or questions answered end game
- [ ] 5. On game end show total
        a. store score and name into local storage
        b. retrieve highscore list
---------------
above meets acceptance criteria, additional for practice
- [ ] 6. randomize questions
- [ ] 7. sound on wrong/right
- [ ] 8. warning sound when timer within final 5 seconds