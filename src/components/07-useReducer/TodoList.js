import React from "react";

export const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map((todo) => {
        return (
          <li className="list-group-item">
            <p
              className={todo.done ? "complete" : ""}
              onClick={() => props.handleComplete(todo.id)}
            >
              {todo.desc}
            </p>
            <button
              className="btn btn-danger"
              onClick={() => props.handleDelete(todo.id)}
            >
              Borrar
            </button>
          </li>
        );
      })}
    </ul>
  );
};
