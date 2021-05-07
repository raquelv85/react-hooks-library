import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleComplete = (todoId) => {
    dispatch({ type: "complete", payload: todoId });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleComplete={(id) => handleComplete(id)}
            handleDelete={(id) => handleDelete(id)}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={(newTodo) => handleAddTodo(newTodo)} />
        </div>
      </div>
    </div>
  );
};
