import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import Cell from "../Cell/Cell";
import Moves from "../Moves/Moves";
import Timer from "../Timer/Timer";
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
            // swap randomly chosen element with current element
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

        if (((indx - 4) >= 0 || (indx - 4) <= 15) && newCells[indx - 4] === 0) {
            newCells[indx - 4] = newCells[indx];
            newCells[indx] = 0;
            setMovementsNums(movementsNum + 1);
        } else if (((indx + 4) >= 0 || (indx + 4) <= 15) && newCells[indx + 4] === 0) {
            newCells[indx + 4] = newCells[indx];
            newCells[indx] = 0;
            setMovementsNums(movementsNum + 1);
        } else if ((indx - 3) % 4 === 0 && newCells[indx - 1] === 0) {
            newCells[indx - 1] = newCells[indx];
            newCells[indx] = 0;
            setMovementsNums(movementsNum + 1);
        } else if ((indx - 4) % 4 === 0 && newCells[indx + 1] === 0) {
            newCells[indx + 1] = newCells[indx];
            newCells[indx] = 0;
            setMovementsNums(movementsNum + 1);
        } else {
            if (newCells[indx - 1] === 0) {
                newCells[indx - 1] = newCells[indx];
                newCells[indx] = 0;
                setMovementsNums(movementsNum + 1);
            } else if (newCells[indx + 1] === 0) {
                newCells[indx + 1] = newCells[indx];
                newCells[indx] = 0;
                setMovementsNums(movementsNum + 1);
            }
        }

        setCellNums(newCells);
    };

    useEffect(() => shuffleCells
        , []
    );


    const cells = cellNums.map((num, indx) => <Cell key={indx} number={num} indx={indx} moveCell={moveCell} />);


    console.log(cells);

    return (
        <div>
            <StartGame startGame={startGame} />
            <Timer time={time} />
            <Moves movementsNum={movementsNum} />
            <Board>
                {cells}
            </Board>
        </div>
    );
};

export default Game;