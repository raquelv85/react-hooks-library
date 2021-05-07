import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            handleComplete={(id) => props.handleComplete(id)}
            handleDelete={(id) => props.handleDelete(id)}
          />
        );
      })}
    </ul>
  );
};
