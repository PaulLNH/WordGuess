// The file containing the logic for the course of the game, which depends on `Word.js` and:
// Randomly selects a word and uses the `Word` constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word");

var words = [
        "bandana",
        "britches",
        "cahoots",
        "campfires",
        "cavalry",
        "chaps",
        "courageous",
        "cowboy",
        "desperado",
        "frontier",
        "giddyup",
        "gold fever",
        "gunslinger",
        "horse",
        "howdy",
        "indians",
        "invasion",
        "jail",
        "justice",
        "leather",
        "livestock",
        "longhorns",
        "maverick",
        "outlaw"
    ],
    word,
    lives;

function reset() {
    word = words[Math.floor(Math.random() * words.length)];
    lives = 10;
    console.log(word);
}

function start() {
    var newWord = new Word(word);
    console.log(newWord.getWord());
    var questions = [{
        type: 'input',
        name: 'guess',
        message: "Guess a letter:",
        length: 1
    }];

    inquirer.prompt(questions).then(guess => {
        newWord.word.forEach(guess => {
            newWord.guess(guess);
        });
        // console.log(JSON.stringify(guess, null, '  '));
    });
}

reset();
start();