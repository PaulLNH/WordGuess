// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user 
// is attempting to guess. That means the constructor should define:

var Letter = require("./letter");

function Word(char) {
    this.word = [];
    wordArray = char.split("");
    wordArray.forEach(element => {
        this.word.push(element);
    });
    this.word = wordArray.forEach(l => {
        var letter = new Letter(l);
    });

    this.getWord = function () {
        // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        this.word.forEach(g => {
            letter.check(g);
        })

        // console.log(Letter("M"));
    };
    this.guess = function () {
        // function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
        console.log("Run word.guess function.");
        letter.guess(char);
    };
};

module.exports = Word;