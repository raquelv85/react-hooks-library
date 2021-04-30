import React from "react";
import { useForm } from '../../hooks/useForm'
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formValues)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <hr />
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <hr />
      <div className="form-group">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="****"
          value={ password }
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    <button className="btn btn-primary" type="submit">Guardar</button>
    </form>
  );
};
