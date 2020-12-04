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
    this.rl.question("What is your move? Enter row,col (example: 3,2) \n", (answer) => {
      const [row, col] = answer.split(",");
      processMove([Number(row), Number(col)]);
    })
  }

  processGameOver(isWon, turns) {
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
    if (isWon) {
      console.log(`You win! You won in ${turns} turns!`)
    }
    else {
      console.log(`You lose.`)
    }
    this.rl.close()
  }
}

module.exports = HumanPlayer;
