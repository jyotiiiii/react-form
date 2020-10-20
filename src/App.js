import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    remember: false,
  });

  function onSubmit(event) {}

  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label>Username</label>
        <input type="text" name="username" />

        <label>Age</label>
        <input type="number" name="age" />

        <span>
          <input type="checkbox" name="remember" />
          <label>Remember Me</label>
        </span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
