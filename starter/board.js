class Board {
  constructor(numRows, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    this.numRows = numRows;
    this.numCols = numCols;
    this.numShips = numShips;
    // TODO: Set this.grid equal to the return value of the instance method
    this.grid = this.populateGrid();
    // populateGrid().
  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let array = [];
    const totalSquares = this.numRows * this.numCols;
    for (let i = 0; i < this.numRows; i++) {
      let arr1 = [];
      for (let j = 0; j < this.numCols; j++) {
        let arr2 = null;
        arr1.push(arr2)
      }
      array.push(arr1);
    }

    // this.numRows = 4[[null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]]

    //

    function getRandomInt(totalSquare) {
      return Math.floor(Math.random() * Math.floor(totalSquare));
    }
    let i = 0;
    while(i < this.numShips) {  //numShips needs to be less than total squares
      let randomPlaceIdxRow = getRandomInt(this.numRows);
      let randomPlaceIdxCol = getRandomInt(this.numCols);
      let target = array[randomPlaceIdxRow][randomPlaceIdxCol];
      if (target === null) {
        target = 's' // x will represent an attacked ship
        i++
      }
    }
    return array;
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()

    //null = ~
    //s = ~
    //hit(x) = H
    //miss = X

    // this.numRows = 4[[null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]
    // this.numRows = 4 [null, null, null, null, null]]

    let playerViewArr = [...this.grid] //update every time a user makes a move

    //Double loop?

    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        let el = this.numCols[j]
        if (el === null) {
          el = `~`;
        }
        else if (el === `s`) {
          el = `~`;
        }
        else if (el === `x`) {
          el = `H`
        }
      }
    }

    console.table(playerViewArr)
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.

    let counter = this.numShips;

    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        let el = this.numCols[j]
        // if ()
        // Count total amount of X's; if total X's equals this.numShips
      }
    }

  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

let board = new Board(4, 4, 5)
board.display()

module.exports = Board;
