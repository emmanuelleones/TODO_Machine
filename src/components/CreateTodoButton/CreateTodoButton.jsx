import React from "react";
import { Title } from "../miniComponents/Titles/Title";
import { Button } from "../miniComponents/Buttons/Button";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  return (
    <React.Fragment>
      <div className="contentCreateTask">
        <Title className="h2 titleNewTask" text="Crear nueva tarea" />
        <div className="contentNameTask">
          <Title className="h6 NameTask" text="Nombre de tarea:" />
          <input
            className="boxTask"
            placeholder="Hacer mi tarea de Frontend"></input>
        </div>
        <Button className="buttonCreateTask" text="Agregar tarea" />
      </div>
    </React.Fragment>
  );
};

export { CreateTodoButton };
