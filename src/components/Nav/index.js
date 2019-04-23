import React from "react";
import "./style.css";

const Nav = props => {
    return (
            <div className="n-bar">
                <p className="">Clicky Game</p>
                <span>Score: {props.score} | High Score: {props.highScore}</span>
            </div>
    )
}

export default Nav;