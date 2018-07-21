const Letter = require('./Letter.js');

function Word(wordString) {
    this.word = wordString;
    this.letterArray = [];
    this.wordArray = this.word.split("");
    this.chanes = 10;

    // terns letters of the word to a string of and hied the letter
    this.createLetter = function () {
        for (let i = 0; i < this.wordArray.length; i++) {
            this.letterArray.push(new Letter(this.wordArray[i]));

        }
    }

    // displays a string representing the word.
    this.displayWord = function () {
        let displayArray = [];
        for (let i = 0; i < this.wordArray.length; i++) {
            displayArray.push(this.letterArray[i].display());

        }
        console.log(displayArray.join(" "));
    }

    // check to see if letter is in word then displays them if leters correct
    this.checkUserGuess = function (userGuess) {
        
        if (this.wordArray.includes(userGuess)) {
            console.log(userGuess + " is in the word" + " Trys left: " + this.chanes);
            for (let i = 0; i < this.wordArray.length; i++) {
                if (userGuess === this.letterArray[i].character) {
                    this.letterArray[i].guessed = true;
                }
            }
        } else {
            this.chanes--;
            console.log(userGuess + " isn't in our word" + " Trys left: " + this.chanes);
        }
        this.displayWord();
    }
    // check loss on index

    this.checkWin = function(){
        let letterCount = 0;
        for (let i = 0; i < this.wordArray.length; i++) {
            if (this.letterArray[i].guessed) {
                letterCount++;
            }
        }
        if (letterCount === this.wordArray.length) {
            return true;
            
        }
        
        return false;
        
    }
}

module.exports = Word;