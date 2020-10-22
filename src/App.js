import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const imageURL = watch("imageURL", 2);

  const [images, setImages] = useState([]);

  const addImage = () => {
    const currentImages = images;
    currentImages.push(imageURL);
    setImages([...currentImages]);
  };

  const remove = (index) => {
    setImages([...images.slice(0, index), ...images.slice(index + 1)]);
  };

  const onSubmit = (formData) => {
    console.log(formData);
    alert(JSON.stringify(formData));
  };

  return (
    <>
      <h1>Add Article</h1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <label>Headline</label>
        <input
          type="text"
          name="headline"
          ref={register({ required: true, minLength: 3 })}
        />
        {errors.headline && <p>Headline required</p>}

        <label>Image URL</label>

        <input type="text" ref={register} name="imageURL" placeholder="Url" />

        <button
          type="button"
          onClick={() => {
            addImage();
          }}
        >
          Add image URL
        </button>

        {images.map((image, index) => (
          <tr key={index}>
            <p>{image}</p>
            <button onClick={() => remove(index)}>Delete</button>
          </tr>
        ))}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
