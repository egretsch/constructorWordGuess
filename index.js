const Word = require('./Word.js');
const inquirer = require('inquirer');
let chosenLetters = [];
let myWord;

// salects random Word for the user to guess
function randomWord() {
    const wordStringArray = ["batman", "goku", "gilbert", "dragonball", "vagita",
    "iorn man", "alucard", "dracula", "naruto", "onepunch man", "superman",];
    const indexWord = Math.floor(Math.random() * wordStringArray.length);
    // console.log(indexWord);
    return wordStringArray[indexWord];

}

function wordGuess() {
    
    
    
    inquirer.prompt([
        {
            name: 'guess',
            message: 'What letter would you like to guess?' +
            "\nGuessed letters: " + chosenLetters
        },
    ]).then(answers => {
        let guess = answers.guess.toLowerCase();
        if (guess === 'exit') {
            process.exit();
        }
        chosenLetters.push(guess);
        myWord.createLetter();
        myWord.displayWord();
        if (!myWord.checkWin()) {
            myWord.checkUserGuess(guess);
        }
        if (myWord.checkUserGuess(guess) === 0) {
            playAgain();
        }
        else {
            wordGuess();
        }
    });
    // return wordGuess();
};

function game() {
    myWord = new Word(randomWord());
    wordGuess();
    myWord.createLetter();
    myWord.displayWord();
};

const playAgain = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'playAgain',
            message: 'Would you like to play again?',
            choices: ['Yes', 'No']
        },
    ]).then(function (response) {
        let playAgain = response.playAgain;
        if (playAgain === 'No') {
            console.log('Ok, see you next time!');
            process.exit();
        }
        else {
            game();
        }
    });
};

game();

// let myWord = new Word("wolf");
// myWord.createLetter();
// myWord.displayWord();
// myWord.checkUserGuess("w");
// myWord.checkUserGuess("z");
// console.log(randomWord());

// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("p")
// }
// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("g")
// }
// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("j")
// }
// if(!myWord.checkWin()){
//     myWord.checkUserGuess("o")
// }
// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("l")
// }
// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("f")
// }
// if (!myWord.checkWin()) {
//     myWord.checkUserGuess("y")
// }





