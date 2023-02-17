import Tile from './Tile';
export default function createBoard(
  func,
  attackedTiles,
  setAttacked,
  solution,
  active
) {
  let board = [];
  let tile = '';

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let attacked = false;
      const num = i + j + 2;
      const val = [i] + [j];
      if (attackedTiles.includes(val)) attacked = true;
      if (num % 2 === 0) {
        tile = setTile(
          'bg-lime-700',
          i,
          j,
          func,
          setAttacked,
          attackedTiles,
          attacked,
          solution,
          active
        );
      } else {
        tile = setTile(
          'bg-amber-100',
          i,
          j,
          func,
          setAttacked,
          attackedTiles,
          attacked,
          solution,
          active
        );
      }
      board.push(tile);
    }
  }

  return board;
}
function setTile(
  color,
  i,
  j,
  func,
  setAttacked,
  attacked,
  isAttacked,
  solution,
  active
) {
  return (
    <Tile
      id={`${i}${j}`}
      key={`${i}${j}`}
      color={color}
      onChange={func}
      attacked={attacked}
      setAttacked={setAttacked}
      isAttacked={isAttacked}
      solution={solution}
      active={active}
    ></Tile>
  );
}
