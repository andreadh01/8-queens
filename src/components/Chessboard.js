import React from 'react';
import createBoard from './Board.js';
function Chessboard({ solution, active }) {
  const [board, setBoard] = React.useState();
  const [attacked, setAttacked] = React.useState([]);

  React.useEffect(() => {
    let tiles = createBoard(setBoard, attacked, setAttacked, solution, active);
    setBoard(tiles);
  }, [attacked, solution, active]);

  return (
    <div
      className={`flex flex-wrap max-w-[320px]	sm:max-w-[640px] ${
        solution.length > 0 && 'pointer-events-none'
      }`}
    >
      {board}
    </div>
  );
}

export default Chessboard;
