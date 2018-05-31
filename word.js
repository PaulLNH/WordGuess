var Letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.letterObj = [];
    this.wordGuessed = false;
    // Array of `new` Letter objects representing the letters of the underlying word
    this.getLetters = () => {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letterObj.push(newLetter);
        }
    };
    // Function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.WDisplay = () => {
        var display = '';
        //render the word based on if letters are found or not
        this.letterObj.forEach(letter => {
            var currentLetter = letter.LDisplay();
            display += currentLetter;
        });
        return display;
    };
    // Function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    this.LSearch = guessedLetter => {
        var numCorrect = 0;
        // Iterates through each letter object to see if it matches the guessed letter
        this.letterObj.forEach(letter => {
            if (letter.letter === guessedLetter) {
                letter.guessed = true;
                numCorrect++;
            }
        })
        // If guessedLetter matches Letter property, the letter object should be shown
        return numCorrect;
    };
    // Returns true if all the letters have been found in the word
    this.WSearch = () => {
        if (this.letterObj.every(letter => {
                return letter.guessed;
            })) {
            this.wordGuessed = true;
            return true;
        }
    };
}

module.exports = Word;