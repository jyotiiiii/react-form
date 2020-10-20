import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: Schema,
  });

  function onSubmit(formData) {
    console.log(formData);
  }

  console.log(errors);

  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type="text" name="username" ref={register} />
        {errors.username && <p>{errors.username.message}</p>}

        <label>Age</label>
        <input type="number" name="age" ref={register} />

        <span>
          <input type="checkbox" name="remember" ref={register} />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
