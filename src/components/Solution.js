let sol = [];
let board = [];

function placeQueen(row) {
  if (row > 7) {
    return true;
  }

  let options = shuffle([0, 1, 2, 3, 4, 5, 6, 7]);

  for (let i = 0; i < options.length; i++) {
    let col = options[i];

    if (isSquareThreatened(row, col)) {
      continue;
    }

    board[row][col].hasQueen = true;
    let result = placeQueen(row + 1);
    if (result) {
      sol.push(board[row][col].id);
      return true;
    }

    board[row][col].hasQueen = false;
  }

  return false;
}

function shuffle(a) {
  let a2 = [];

  while (a.length > 0) {
    let i = Math.floor(Math.random() * a.length);
    a2.push(...a.splice(i, 1));
  }

  return a2;
}

function isSquareThreatened(row, col) {
  return (
    isColumnThreatened(row, col) ||
    isDiagonalThreatenedNW(row, col) ||
    isDiagonalThreatenedNE(row, col)
  );
}

function isColumnThreatened(row, col) {
  for (let r = row - 1; r >= 0; r--) {
    if (board[r][col].hasQueen) {
      return true;
    }
  }

  return false;
}

function isDiagonalThreatenedNW(row, col) {
  for (let r = row - 1, c = col - 1; r >= 0 && c >= 0; r--, c--) {
    if (board[r][c].hasQueen) {
      return true;
    }
  }

  return false;
}

function isDiagonalThreatenedNE(row, col) {
  for (let r = row - 1, c = col + 1; r >= 0 && c < 8; r--, c++) {
    if (board[r][c].hasQueen) {
      return true;
    }
  }

  return false;
}

function makeBoard() {
  let squares = [];

  for (let r = 0; r < 8; r++) {
    let row = [];

    for (let c = 0; c < 8; c++) {
      let square = new Square(r, c);
      row.push(square);
    }

    squares.push(row);
  }

  return squares;
}

class Square {
  constructor(row, col) {
    this.row = row;
    this.col = col;

    this.hasQueen = false;
    this.id = `${row}${col}`;
  }
}

function solvePuzzle() {
  return placeQueen(0);
}

export default function solution() {
  sol = [];
  board = makeBoard();
  solvePuzzle();
  return sol;
}
