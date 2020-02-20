import React from "react";
import "./style.css";

function Card(props) {

    return (
                <div className="card ">
                    <div className="cardImage center">
                        <img
                            data-clicked={props.clicked}
                            id={props.id}
                            className="charImg"
                            alt={props.name}
                            src={props.image}
                            onClick={props.onClick}
                        />
                    </div>
                </div>
     


    );
}

export default Card;