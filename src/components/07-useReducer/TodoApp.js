import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "nueva tarea",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: "nueva tarea",
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo) => {
              return (
                <li className="list-group-item">
                  <p>{todo.desc}</p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="agregar tarea..."
            />
            <button type="submit" className="btn btn-outline-primary mt-1 btn-block">Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
