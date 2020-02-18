import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="navLink col-md-4">
                    <a href="/">
                        Memory Game
                    </a>
                </div>

                <div className="col-md-4">
                   <div>{props.message}</div> 
                </div>
                <div className="col-md-4">
                    <div>Score: {props.score} | Top Score: {props.topScore}</div>
                    </div>

            </nav>
        </div>
    );
}

export default Navbar;
