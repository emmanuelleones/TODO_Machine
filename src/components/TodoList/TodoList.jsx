import React from "react";

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