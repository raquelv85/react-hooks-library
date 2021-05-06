import React, { useReducer } from "react";
import { todoReducer } from './todoReducer'

import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'nueva tarea',
  done: false
}]

export const TodoApp = () => {

  const [ todos ] = useReducer(todoReducer, initialState)

  return (
    <div>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Hola</li>
        <li>Adios</li>
      </ul>
    </div>
  );
};
