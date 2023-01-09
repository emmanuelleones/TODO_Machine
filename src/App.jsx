import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => { /* APP es un componente */
    return (
      /* El componente App, intergra los siguentes elementos. */
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {props.children} {/* Y Children es una propiedad de React. */}
        </p>
      </div>
    );
  };
export default App;

/* Aprendiendo a utilizar la propiedad Children:

Las Children son una forma de composición de componentes, 
donde, valga la redundancia, podemos pasar componentes a 
través de propiedades.

*/