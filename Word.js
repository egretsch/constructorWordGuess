const Letter = require('./Letter.js');

function Word(wordString) {
    this.word = wordString;
    this.letterArray = [];
    this.wordArray = this.word.split("");
    // this.displayArray = [];

    this.createLetter = function () {
        for (let i = 0; i < this.wordArray.length; i++) {
            this.letterArray.push(new Letter(this.wordArray[i]));

        }
    }
    this.displayWord = function () {
        let displayArray = [];
        for (let i = 0; i < this.wordArray.length; i++) {
            // console.log(this.letterArray[i])
            displayArray.push(this.letterArray[i].display())

        }
        console.log(displayArray.join(" "));
    }

    this.checkUserGuess = function(userGuess){
        if (this.wordArray.includes(userGuess)) {
            console.log(userGuess + " is in the word");
            // set the guessed boolean in the letter object that corresponds to the userGuessed letter to true
            // call our displayWord
            for (let i = 0; i < wordArray.length; i++) {
                if (userGuess === this.letterArray[i].character) {
                    this.letterArray[i].guessed = true;
                }
            }
            this.displayWord();
            
        } else {
            console.log(userGuess + " isn't in our word")
        }

    
}

    
}


module.exports = Word;