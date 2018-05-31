### Node.js Word Guess

This is a node based application version of hangman played in the command line interface. This application displays usage of constructor functions across multiple files.

#### Getting started:

Clone the GitHub repo: `https://github.com/PaulLNH/WordGuess.git`

Install dependencies via `npm i`, if you encounter problems installing these dependencies using the package.json that is include with the application you can install them manually by entering the following:

* `npm i inquirer`
* `npm i is-letter`

After you have the application setup you can run `node index.js` in the command line to get started.

**NOTE**: _These words have been carefully selected to be challenging, please do not throw your computer monitor or any of it's peripherals across the room and/or out any windows._

#### Other Features:

* This application has character validation built into it, meaning there is no way to enter an incorrect guess and have it count against you. Only legitimate guesses will deduct from your overall guesses and duplicate guesses will prompt you to try again without deducting from your overall guesses (I won't deduct from your points for getting choked up in the heat of the moment).

* As you guess incorrect letters it draws the hangman out in ASCII art (fancy!)

#### Technologies Used:

* JavaScript
* Node.js
* Inquirer npm
* is-letter npm

#### Author:

My name is Paul Laird and I am an Engineer and Entrepreneur. I love challenges and more importantly love solving challenges for small businesses.
