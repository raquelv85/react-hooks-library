import React, { useState } from "react";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const { name, email, password } = formState;



  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
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

    </>
  );
};
