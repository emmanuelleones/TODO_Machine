import React from "react";
import "./TodoItem.css";

const TodoItem = (props) =>{
    return(
        <React.Fragment>
            <li className="listTask">
                <span>
                    <p>{props.text}</p>
                </span>
            </li>
        </React.Fragment>
    );
}
export {TodoItem};