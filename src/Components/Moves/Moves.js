import React from "react";
import "./Moves.css";

const Moves = (props) => {
  return (
    <div className="moves">
      {props.movementsNum}
      {" Moves"}
    </div>
  );
};

export default Moves;
