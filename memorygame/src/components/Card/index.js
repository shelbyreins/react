import React from "react";

function Card(props) {

    return (
                <div className="card">
                    <div className="cardImage">
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