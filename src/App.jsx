import React from 'react';
import './App.css';
import {TodoCounter} from './components/TodoCounter/TodoCounter';
import {TodoItem} from './components/TodoItem/TodoItem';
import {TodoList} from './components/TodoList/TodoList';
import {TodoSearch} from './components/TodoSearch/TodoSearch';
import {CreateTodoButton} from './components/CreateTodoButton/CreateTodoButton';

/* Lista falsa de TODO */
const todos = [
  {text: 'Meditar', completed:false},
  {text: 'Tomar agua', completed:false},
  {text: 'Hacer ejecicio', completed:false}
];

const App = () => { 
    return (
      /* Un componente solo puede retornar un solo elemento,
          es por eso, que debemos empaquetar todo el código 
          del componente dentro de React.Fragment.
      */
    <React.Fragment> 
      <TodoCounter />
      <TodoSearch></TodoSearch>
      <input placeholder='Meditar'/>
      {/* ATENCIÓN:
       Dentro de TodoList hay un elemento UL que se enlaza 
          con el componente TodoList que tiene un elemento LI
      */}
      <TodoList> 
        {/* Utilizamos map para recorrer la matriz todos falsa*/}
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}        
      </TodoList>
      <CreateTodoButton/>
      <button>+</button>
    </React.Fragment>
    );
  }
export default App;