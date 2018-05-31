var inquirer = require('inquirer');
var isLetter = require('is-letter');
var Word = require('./word.js');
var Bank = require('./bank.js');
// Hangman ascii art drawing object
var hangManDisplay = Bank.data.hangman;

var game = {
    Bank: Bank.data.word,
    guesses: 10,
    // Array to hold guessed letters
    guessed: [],
    // Display index to display hangman ASCII art
    display: 0,
    currentWord: null,
    // Prompts user if they are ready to play
    start: function () {
        // Inquirer prompt
        inquirer.prompt([{
            name: `play`,
            type: `confirm`,
            message: `Are you up for playing a challenging game of hangman?`
        }]).then(answer => {
            if (answer.play) {
                this.new();
            } else {
                console.log(`Ok then, maybe next time...`);
            }
        })
    },
    // If user selects yes, start new game
    new: function () {
        if (this.guesses === 10) {
            console.log(`Good luck! Don't say I didn't warn you.`);
            console.log(`==========================`);
            // Selects a reandom word from word bank
            var randNum = Math.floor(Math.random() * this.Bank.length);
            this.currentWord = new Word(this.Bank[randNum]);
            this.currentWord.getLetters();
            // Calls the word display function to return blank spaces for the word (or spaces if it's a multipart word)
            console.log(this.currentWord.WDisplay());
            this.keepPromptingUser();
        } else {
            this.resetGuesses();
            this.new();
        }
    },
    // Sets starting guesses
    resetGuesses: function () {
        this.guesses = 10;
    },
    // If word is not found 
    keepPromptingUser: function () {
        // Gathers user input
        inquirer.prompt([{
            name: `userGuess`,
            type: `input`,
            message: `Guess a letter:`,
            validate: value => {
                if (isLetter(value)) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(input => {
            // Convert letters to uppercase to match exact (and better UX)
            var letterReturned = (input.userGuess).toUpperCase();
            // If letter has not been guessed add it to the array of guessed letters
            var guessedAlready = false;
            for (var i = 0; i < this.guessed.length; i++) {
                if (letterReturned === this.guessed[i]) {
                    guessedAlready = true;
                }
            }
            // Prevents duplicate guesses
            if (!guessedAlready) {
                // Adds the guess to the guessed array
                this.guessed.push(letterReturned);
                // Pass returned letters into letter search array, store results in found as an integer
                var found = this.currentWord.LSearch(letterReturned);
                // If no results were found tell user out of luck
                if (found === 0) {
                    console.log(`Sorry pal, you guessed wrong.`);
                    this.guesses--;
                    this.display++;
                    console.log(`Only ${this.guesses} guesses remaining.`);
                    console.log(hangManDisplay[(this.display) - 1]);

                    console.log(`\n==========================`);
                    console.log(this.currentWord.WDisplay());
                    console.log(`\n==========================`);

                    console.log(`Letters guessed: ${this.guessed}`);
                } else {
                    console.log(`Darn! You guessed correct.`);
                    // Win condition
                    if (this.currentWord.WSearch()) {
                        console.log(this.currentWord.WDisplay());
                        console.log(`Ya did good kid... You won't be so lucky next time.`);
                    } else {
                        console.log(`${this.guesses} guesses remaining.`);
                        console.log(this.currentWord.WDisplay());
                        console.log(`\n==========================`);
                        console.log(`Letters guessed: ${this.guessed}`);
                    }
                }
                if (this.guesses > 0 && !this.currentWord.wordGuessed) {
                    this.keepPromptingUser();
                } else if (this.guesses === 0) {
                    console.log(`Hah! You're pretty good kid, but not good enough to beat me.`);
                    console.log(`The word you were looking for was: ${this.currentWord.word}`);
                }
            } else {
                console.log(`C'mon kid... you already guessed that letter.`)
                this.keepPromptingUser();
            }
        });
    }
}

game.start();