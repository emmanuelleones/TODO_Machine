import React from "react";
import "./ButtonStyles.css";

const Button = ({className, onClick, text}) =>{
    return(
        <React.Fragment>
            <button className={className} onClick={onClick}> {text} </button>
        </React.Fragment>
    );
};
export {Button}