import React from "react";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-item center col-md-4">
                    <a href="/">
                        Memory Game
                    </a>
                </div>

                <div className="nav-item  col-md-4">
                   {props.message}
                </div>
                <div className="nav-item  col-md-4">
                   Score: {props.score} | Top Score: {props.topScore}
                    </div>

            </nav>
        </div>
    );
}

export default Navbar;
