export default function checkAttacked(position) {
  let row = parseInt(position.split('')[0]);
  let col = parseInt(position.split('')[1]);
  let attackedArray = [[row] + [col]];

  for (let index = 0; index <= 7; index++) {
    // horizontal
    if (row !== index) {
      attackedArray.push(index + [col]);
    }
    // vertical
    if (col !== index) {
      attackedArray.push([row] + index);
    }

    if (index > 0) {
      // diagonal hacia la derecha abajo
      if ((row !== 7 || col !== 7) && row !== 7 && col !== 7) {
        if (row + index <= 7 && col + index <= 7)
          attackedArray.push([row + index] + [col + index]);
      }
      // diagonal hacia la izquierda arriba
      if ((row !== 0 || col !== 0) && row !== 0 && col !== 0) {
        if (row - index >= 0 && col - index >= 0)
          attackedArray.push([row - index] + [col - index]);
      }
      // diagonal hacia la derecha arriba
      if ((row !== 0 || col !== 7) && row !== 0 && col !== 7) {
        if (row - index >= 0 && col + index <= 7)
          attackedArray.push([row - index] + [col + index]);
      }
      // diagonal hacia la derecha abajo
      if ((row !== 7 || col !== 0) && row !== 7 && col !== 0) {
        if (row + index <= 7 && col - index >= 0)
          attackedArray.push([row + index] + [col - index]);
      }
    }
  }

  return attackedArray;
}
