import React from "react";
import "./StartGame.css";

const StartGame = (props) => {
  const handleStart = () => {
    props.startGame();
  };

  return (
    <div onClick={handleStart} className="start-game">
      New Game
    </div>
  );
};

export default StartGame;
