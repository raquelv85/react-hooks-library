import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = (props) => {

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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

    props.handleAddTodo(newTodo);
    
    reset();
  };

  return (
    <>
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
    </>
  );
};
