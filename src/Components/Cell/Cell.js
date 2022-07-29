import React from "react";
import "./Cell.css";

const Cell = (props) => {
  const handleMove = () => {
    props.moveCell(props.indx);
  };

  return (
    <div onClick={handleMove} className={props.cellClassName}>
      <div className="ball-1"></div>
      <div className="ball-2"></div>
      {props.number ? props.number : ""}
    </div>
  );
};

export default Cell;
