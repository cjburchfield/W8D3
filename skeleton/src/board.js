// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let rows = 8;
  let cols = 8;

  let grid = new Array(rows)
    for (let i = 0; i < rows; i++) {
      grid[i] = new Array(cols);
    }

    grid[3][4] = new Piece("black");
    grid[4][3] = new Piece("black");
    grid[3][3] = new Piece("white");
    grid[4][4] = new Piece("white");
    

  return grid;
};


/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] < 0 || pos[0] > 7) return false //if X is out of bounds
  if (pos[1] < 0 || pos[1] > 7) return false //if Y is out of bounds
  return true
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) throw new Error('Not valid pos!');
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (!this.getPiece(pos)) return false
  return this.getPiece(pos).color === color
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return !!this.getPiece(pos)
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */

Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip) {
  if (!piecesToFlip) piecesToFlip = [];
  if (!this.isValidPos(nextPos(pos, dir))) return [];
  if (!this.isOccupied(nextPos(pos, dir))) return [];
  let piece = this.getPiece(pos);
  if (!piece) {
    return this._positionsToFlip(nextPos(pos, dir), color, dir, piecesToFlip);
  }
  if (!!piece && piece.color !== color) {
    debugger
    piecesToFlip.push(pos)
    return this._positionsToFlip(nextPos(pos, dir), color, dir, piecesToFlip);
  };
  if (!!piece && piece.color === color) return piecesToFlip;
};

function nextPos(pos, dir) {
  return [(pos[0] + dir[0]), (pos[1] + dir[1])];
};

  // if (!this.isValidPos(nextPos(pos, dir))) return []
//     if (!this.isOccupied(pos) || !this.isValidPos(nextPos(pos, dir))) {
//         return []; 
//     } else {
//        (piecesToFlip.push(pos))
//     }

//   return piecesToFlip.concat(this._positionsToFlip(nextPos(pos, dir), color, dir, piecesToFlip))
// };

  // while (!this.isMine(nextPos(pos, dir), color) && this.isValidPos(nextPos(pos, dir))) {
  //   let p = this.getPiece(nextPos(pos, dir));
  //   if (!!p) piecesToFlip.push(p);
  // };
  // return piecesToFlip;


/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  !this.isOccupied(pos) && this.grid
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE