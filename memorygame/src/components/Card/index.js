import React from "react";

function Card(props) {

    return (
        <div className="container">
            <div className="row">
                    <div className=" card cardImage ">
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
            </div>
        

    );
}

export default Card;