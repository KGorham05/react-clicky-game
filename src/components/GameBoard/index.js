import React from "react";
// import "./style.css";

const GameBoard = props => (

    <div className="game-board container">
        <div className="row text-center ">
                {props.children}
        </div>
    </div>

);

export default GameBoard;