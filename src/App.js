import React from 'react';
import Chessboard from './components/Chessboard';
import solution from './components/Solution';

export default function App() {
  const [answer, setAnswer] = React.useState([]);
  const [active, setActive] = React.useState(true);
  const [boardKey, setBoardKey] = React.useState(Date.now());
  function loadSolution() {
    setAnswer(solution());
  }

  function reiniciar() {
    setActive(true);
    setBoardKey(Date.now());
    setAnswer([]);
  }

  return (
    <div className="flex font-mono flex-col lg:flex-row justify-around items-center h-screen bg-black">
      <h1 className="text-white text-5xl 	font-bold	">8 reinas</h1>
      <Chessboard key={boardKey} solution={answer} active={setActive} />
      <div className="flex lg:flex-col items-center gap-8">
        <div className="flex flex-col">
          <span
            className={`${
              active ? 'invisible' : 'text-white'
            }  text-center text-xs my-2`}
          >
            Reinicia para
            <br /> activar el boton
          </span>
          <button
            onClick={loadSolution}
            className={`w-fit text-xl py-2 px-4 rounded bg-white text-black hover:bg-lime-700 transition-all ${
              !active && 'pointer-events-none bg-gray-400 transition-all'
            }`}
          >
            Solución
          </button>
        </div>
        <button
          onClick={reiniciar}
          className="w-fit text-xl py-2 mt-12 px-4 rounded bg-white text-black hover:bg-lime-700 transition-all"
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
