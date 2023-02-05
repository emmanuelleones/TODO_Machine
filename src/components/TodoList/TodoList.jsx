import React from "react";
import "./TodoListStyles.css"

const TodoList = (props) =>{
    return(
        <React.Fragment>
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        </React.Fragment>
    );
}
export {TodoList};