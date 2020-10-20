import React, { useState } from "react";
import "./App.css";

function App() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    remember: false,
  });

  function validate({ username }) {
    const valid = username && username.length > 3;
    if (!valid) {
      setErrors({ username: true });
    } else {
      setErrors({});
    }
    return valid;
  }

  function onSubmit(event) {
    event.preventDefault();

    validate(formData) ? console.log(formData) : console.log("invalid");
  }

  function onChange({ target }) {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData((prevstate) => ({
      ...prevstate,
      [target.name]: value,
    }));
  }

  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={onChange}
        />
        {errors.username && <p>Username invalid</p>}

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={onChange}
        />

        <span>
          <input
            type="checkbox"
            name="remember"
            value={formData.remember}
            onChange={onChange}
          />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
