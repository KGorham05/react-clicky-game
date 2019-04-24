import React from "react";
import "./style.css";

const Nav = props => {
    return (
            <div className="n-bar text-right">
                <h1 className="text-center">React Clicky Game!</h1>
                <span>Score: {props.score} | High Score: {props.highScore}</span>
            </div>
    )
}

export default Nav;