import React from 'react';
import checkAttacked from './UnderAttack.js';
import Attacked from './Attacked.js';
import createBoard from './Board.js';

function Tile(props) {
  const [queen, setQueen] = React.useState(false);

  function handleChange() {
    setQueen(!queen);
    props.active(false);
    let arr = checkAttacked(props.id);
    console.log(props.solution);
    if (!queen) {
      props.setAttacked((prev) => [...prev, ...arr]);
      props.onChange(
        createBoard(
          props.onChange,
          props.attacked,
          props.setAttacked,
          props.solution,
          props.active
        )
      );
    } else {
      let newArr = removeAttacked(props.attacked, arr);
      props.setAttacked(newArr);
      props.onChange(
        createBoard(
          props.onChange,
          newArr,
          props.setAttacked,
          props.solution,
          props.active
        )
      );
    }
  }

  return (
    <div
      id={props.id}
      onClick={handleChange}
      className={`w-14 h-14 sm:w-20 sm:h-20 ${props.color} py-2 flex justify-center`}
    >
      <figure className="inline-block	relative">
        {queen ||
        (props.solution !== undefined && props.solution.includes(props.id)) ? (
          <img
            id={props.id}
            className="h-10 sm:h-16 relative z-10"
            alt="queen"
            src="./images/queen.png"
          ></img>
        ) : null}
        {props.isAttacked && <Attacked></Attacked>}
      </figure>
    </div>
  );
}

function removeAttacked(arr1, arr2) {
  // arr1 es el array con todas las casillas atacadas
  // arr2 es el array con casillas que queremos desactivar

  arr2.forEach((e, i) => {
    if (arr1.includes(e)) {
      arr1.splice(arr1.indexOf(e), 1);
    }
  });

  return arr1;
}

export default Tile;
