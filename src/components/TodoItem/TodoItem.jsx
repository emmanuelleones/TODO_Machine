import React from "react";

const TodoItem = (props) =>{
    return(
        <React.Fragment>
            <li>
                <span>
                    <p>{props.text}</p>
                </span>
            </li>
        </React.Fragment>
    );
}
export {TodoItem};