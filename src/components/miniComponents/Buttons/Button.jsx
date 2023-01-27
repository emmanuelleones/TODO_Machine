import React from "react";
import "./Button.css";

const Button = (items) =>{
    return(
        <React.Fragment>
            <button className={items.className}>{items.text}</button>
        </React.Fragment>
    );
};
export {Button}