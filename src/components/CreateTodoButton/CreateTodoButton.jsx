import React from "react";
import { Title } from "../miniComponents/Titles/Title";
import { Button } from "../miniComponents/Buttons/Button";
import "./CreateTodoButtonStyles.css";
import { saludo } from "./CreateTodoButtonScript";

/*

NOTA: Hacien pruebas a sepación de código pude percatar 
  es posible que los nombre de los archivos generen 
  colición ya que anteriormente en este código que colocó
  los nombre de los archivo de las siguiente manera:
  
  - CreateTodoButton.js
  - CreateTodoButton.jsx
  - CreateTodoButton.css

  No se haya es por que el código no desplegan, en otras
  pruebas de modico a:

  - CreateTodoButtonScript.js
  - CreateTodoButton.jsx
  - CreateTodoButtonStyle.css

  Y se código desplego, por ende se puede concluir es
  hay una posibilidad que los archivo

  - CreateTodoButton.js
  - CreateTodoButton.jsx

    Hayan tenido conflicto no es seguro per es bueno
    tenerlo en cuenta

*/

const CreateTodoButton = () => {
  return (
    <React.Fragment>
      <div className="contentCreateTask">
        <Title className="h2 titleNewTask" text="Crear nueva tarea" />
        <div className="contentNameTask">
          <Title className="h5 NameTask" text="Nombre de tarea:" />
          <input
            className="boxTask"
            placeholder="Hacer mi tarea de Frontend"></input>
        </div>
                                         {/* onClick={saludo} - Un expresión mas que funciona */}
        <Button className='buttonCreateTask' onClick={()=>saludo('Hola que tal?')} text="hola"/>
      </div>
    </React.Fragment>
  );
};

export { CreateTodoButton };