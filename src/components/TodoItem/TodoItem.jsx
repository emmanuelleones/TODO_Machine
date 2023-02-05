import React from "react";
import "./TodoItemStyles.css";

const TodoItem = ({text}) =>{
    return(
        <React.Fragment>
            <li className="listTask">
                <span>
                    <p>{text}</p>
                </span>
            </li>
        </React.Fragment>
    );
}
export {TodoItem};