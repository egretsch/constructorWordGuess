const Word = require('./Word.js');
const inquirer = require('inquirer');

let myWord = new Word("wolf");
myWord.createLetter();
myWord.displayWord();
myWord.checkUserGuess("w");
myWord.checkUserGuess("z");