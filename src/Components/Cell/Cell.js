import React from "react";

const Cell = (props) => {

    const handleMove = () => {
        props.moveCell(props.indx);
    }

    return (
        <div onClick={handleMove}>
            {props.number}
        </div>
    );
};

export default Cell;