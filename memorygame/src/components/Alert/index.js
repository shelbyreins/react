import React from "react";

function Alert(props) {
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Alert;
