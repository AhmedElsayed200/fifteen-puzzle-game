import React from "react";

const StartGame = (props) => {

    const handleStart = () => {
        props.startGame();
    };

    return (
        <div onClick={handleStart}>
            New Game
        </div>
    );
};

export default StartGame;