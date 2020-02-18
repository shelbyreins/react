import React from "react";

function ImageCard(props) {

    return (
        <div>
            <div className="card">
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

export default ImageCard;