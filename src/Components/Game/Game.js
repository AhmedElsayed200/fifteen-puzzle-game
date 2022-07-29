import React, { useEffect, useState } from "react";
import "./Game.css";
import Board from "../Board/Board";
import Cell from "../Cell/Cell";
import Moves from "../Moves/Moves";
// import Timer from "../Timer/Timer";
import StartGame from "../StartGame/StartGame";

const Game = () => {
  const [cellNums, setCellNums] = useState(new Array(16).fill(0));
  const [movementsNum, setMovementsNums] = useState(0);
  const [time, setTime] = useState(0);

  const shuffleCells = () => {
    let cellsShuffled = [...Array(16).keys()],
      i = cellsShuffled.length,
      j = 0,
      temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cellsShuffled[i];
      cellsShuffled[i] = cellsShuffled[j];
      cellsShuffled[j] = temp;
    }

    setCellNums(cellsShuffled);
  };

  const startGame = () => {
    shuffleCells();
    setMovementsNums(0);
    setTime(0);
  };

  const moveCell = (indx) => {
    let newCells = cellNums.slice();
    let zIndx = newCells.indexOf(0);
    let isSorted = true;

    if (zIndx === indx + 4) {
      newCells[indx + 4] = newCells[indx];
      newCells[indx] = 0;
      setMovementsNums(movementsNum + 1);
    } else if (zIndx === indx - 4) {
      newCells[indx - 4] = newCells[indx];
      newCells[indx] = 0;
      setMovementsNums(movementsNum + 1);
    } else if (zIndx === indx + 1 && (indx - 3) % 4 && (indx + 1) % 4) {
      newCells[indx + 1] = newCells[indx];
      newCells[indx] = 0;
      setMovementsNums(movementsNum + 1);
    } else if (zIndx === indx - 1 && indx % 4 && (indx - 4) % 4) {
      newCells[indx - 1] = newCells[indx];
      newCells[indx] = 0;
      setMovementsNums(movementsNum + 1);
    }

    for (let i = 0; i < 15; ++i) {
      if (newCells[i] !== i + 1) {
        isSorted = false;
        break;
      }
    }

    setCellNums(newCells);
    if (isSorted)
      alert(`Congratulations! You Won the game with ${movementsNum} Movements`);
  };

  useEffect(() => {
    shuffleCells();
    let interval;
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cells = cellNums.map((num, indx) => (
    <Cell
      key={indx}
      number={num}
      indx={indx}
      moveCell={moveCell}
      cellClassName={
        num === 0
          ? "empty-cell"
          : num === indx + 1
          ? "cell right-cell animate"
          : "cell animate"
      }
    />
  ));

  return (
    <div id="game">
      <div className="game-title"> 15 Puzzle Game</div>
      <div className="start-status">
        <StartGame startGame={startGame} />
        <div className="timer">
          {time}
          {" Sec."}
        </div>
        <Moves movementsNum={movementsNum} />
      </div>
      <Board>{cells}</Board>
    </div>
  );
};

export default Game;
