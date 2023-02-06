import React from "react";
import "./TodoSearchStyles.css"

const TodoSearch = () =>{
    const onSearchValueChange = (e) =>{ // Función que busca el valor
        console.log (e.target.value)
    }
    return(
        <React.Fragment>
            <input
            placeholder="Tarea"
            onChange={onSearchValueChange } // Investiga la función del evento onChange           
            />
        </React.Fragment>
    );
}
export {TodoSearch};