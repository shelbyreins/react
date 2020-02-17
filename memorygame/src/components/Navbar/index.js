import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-item">
                    <a href="/">
                        Memory Game
                    </a>
                </div>

                <div className="nav-item center">
                    <Alert/>
                    </div>
                <div className="nav-item center">
                    <Score/>
                    </div>

            </nav>
        </div>
    );
}

export default Navbar;
