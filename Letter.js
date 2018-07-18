var Letter = function (character) {
    // console.log('making a new Letter:', character);

    this.character = character;
    this.guessed = false;

    this.display = function () {
        return this.guessed ? this.character : '_';
    }

}

module.exports = Letter;