var GessLetter = function(guessLet) {
    // A string value for the letter
    this.guessLet = guessLet;
    // boolean value that stored
    this.guessed = false;
    // character if the letter has been guessed, or a placeholder 
    this.toString = function () {
        return this.guessed ? this.guessLet : '_';
    }
    // hecks it against the underlying character, updating the stored boolean value to true
    this.makeGuess = function (newGuess) {
        if (this.guessLet.toLowerCase() === newGuess.toLowerCase()) {
            this.guessed = true;
        }
    }

}



module.exports = GessLetter;