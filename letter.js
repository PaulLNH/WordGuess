var Letter = function (letter) {
    // string value to store the underlying character for the letter
    this.letter = letter;
    // boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.LDisplay = () => {
        // Spaces are guessed by default
        if (this.letter == ' ') {
            this.guessed = true;
            return '  ';
        }
        if (!this.guessed) {
            return ' _ ';
        } else {
            return this.letter;
        }
    };
};

// export to use in word.js
module.exports = Letter;