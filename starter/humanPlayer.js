const readline = require("readline");

class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  getMove(processMove /*returns a string*/) {
    // TODO: Ask the user for their move and process the answer using the rl
    // interface. Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
    // we'll need to do string.split on answer
    this.rl.question("What is your move?", (answer) => {
      processMove(answer.split(","));
      this.rl.close() //is this necessary? They do not have it in their answer code.
    })
  }

  processGameOver(isWon) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
