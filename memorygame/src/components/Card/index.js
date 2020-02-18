import React from "react";

function Card(props) {

    return (
            <div className=" card cardImage">
                <img 
                data-clicked={props.clicked} 
                id={props.id} 
                className="charImg" 
                alt={props.name} 
                src={props.image} 
                onClick={props.handleBtnClick} 
                />
            </div>

    );
}

export default Card;