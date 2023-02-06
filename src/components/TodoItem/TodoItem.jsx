import React from "react";
import "./TodoItemStyles.css";

const TodoItem = ({text}) => {
    const onComplete = () => {
        console.log ('Completaste la tarea: '+ text);
    }
    const onDelete = () => {
        console.log ('Borrarte la tarea: '+ text);
    }
    return(
        <React.Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${text.completed && 'Icon-check--active'}`} onClick={()=> onComplete({text})}>
                        √
                </span>
                <p className={`TodoItem-p ${text.completed && 'TodoItem-p--complete'}`}>
                        {text}
                </p>
                <span className={`Icon Icon-check ${text.delete && 'Icon-check--active'}`} onClick={()=> onDelete({text})}>
                        X
                </span>
            </li>
        </React.Fragment>
    );
}
export {TodoItem};