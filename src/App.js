import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off">
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
