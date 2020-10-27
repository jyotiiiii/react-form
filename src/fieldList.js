import React, { useState } from "react";
import { useForm } from "react-hook-form";
function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k + 1);
}
export default function App() {
  const { register, handleSubmit } = useForm();

  const [size, setSize] = useState(1);

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createArrayWithNumbers(size).map((index) => {
        return (
          <>
            <label htmlFor="lastName">url</label>
            <input
              name={`url[${index}]`}
              placeholder="url"
              ref={register({ required: true })}
            />
          </>
        );
      })}
      <button type="button" onClick={() => setSize(size + 1)}>
        Add URL
      </button>
      <input type="submit" />
    </form>
  );
}
