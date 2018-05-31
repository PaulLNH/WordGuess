// Contains a constructor, Letter. This constructor should be able to either display an underlying 
// character or a blank placeholder (such as an underscore), depending on whether or not the user 
// has guessed the letter. That means the constructor should define:

function Letter(char) {
    this.char = char; // A string value to store the underlying character for the letter
    this.guessed = false; // A boolean value that stores whether that letter has been guessed yet
    this.check = function () {
        console.log("Made it this far...");
        if (this.guessed === true) {
            console.log("Truthly state");
            return this.char;
        } else {
            console.log("Falsy state");
            return " _ "
        }
    };
    // this.guess = function () {
    //     if (char === this.char) {
    //         this.guessed = true;
    //     }
    // }
};

module.exports = Letter;