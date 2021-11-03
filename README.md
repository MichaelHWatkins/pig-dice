# _Pig Dice_

#### By: _**Mike Watkins**_ _**Albert Lee**_ _**Nick Benzinger**_

#### _A dice game._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_

## Description
_This webpage lets two players play Pig Dice._

## Specs
#### _Takes a dice roll from the user and based on the value, it will increase or decrease the total score_

*Player 1 and Player 2 input their names.

*Player 1 clicks Roll button. Dice is rolled and number is given. 

*If Player 1 rolls a number greater than 1, the value is added to the round total.
 
*If the number 1 is rolled, no score is added and turn will end.

*Player 1 has the option to hold, add total, and end turn. 

*Repeat for Player 2. Player 2 will roll and value will be added.

*When a player's total score reaches 100 or more, player wins and game ends. 

## Tests

Describe: dice()

Test: It should return an object with properties of dice face.
Code: dice1 = new Dice();
expected output:

Describe: diceRoll()

Test: It should return a number to be added to the score.
Code: dice1.diceRoll()
expected output: score between 1 and 6.

Describe: scoreBoard()

Test: It should return an object with properties of total score and score for the players turn.
Code: scoreBoard1 = new scoreBoard();
expected output: totalScore = 0, turnScore = 0, totalScore2 = 0

Describe: addScore(value)

Test: It should add a players round score to the scoreboard
Code: scoreBoard1.addScore(2);
expected output: totalScore = 0, turnScore = 2, totalScore2 = 0



## Setup/Installation Requirements

* _Navigate to https://github.com/MichaelHWatkins/rogers-neighborhood_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/MichaelHWatkins/rogers-neighborhood"_
* _After cloning the project, navigate into it using the command "cd rogers-neighborhood"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## Contact Information
_Mike Watkins, michaelhugheswatkins@gmail.com_


## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Mike Watkins_ _Albert Lee_ _Nick Benzinger_