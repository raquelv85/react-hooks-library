import React from "react";

export const TodoListItem = (props) => {
  return (
    <li className="list-group-item">
      <p
        className={props.todo.done ? "complete" : ""}
        onClick={() => props.handleComplete(props.todo.id)}
      >
        {props.todo.desc}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => props.handleDelete(props.todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
