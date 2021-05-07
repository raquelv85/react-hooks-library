import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
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
          <h4>Agregar todo</h4>
          <hr />
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="agregar tarea..."
              value={description}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
