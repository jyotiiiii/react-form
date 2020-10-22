import React, { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const [images, setImages] = useState([]);

  const { register, handleSubmit, watch, errors } = useForm();
  const imageURL = watch("imageURL");
  const addKeywords = watch("addKeywords");

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

        <input
          type="url"
          ref={register({ required: true, minLength: 3 })}
          name="imageURL"
          placeholder="Url"
        />
        {errors.imageURL && <p>Incorrect URL format</p>}
        <button
          type="button"
          onClick={() => {
            addImage();
          }}
        >
          Add image URL
        </button>

        {images.map((image, index) => (
          <div key={index}>
            <p>{image}</p>
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
        <div>
          <label>Add Keywords</label>
          <input name="addKeywords" type="checkbox" ref={register} />
        </div>

        {addKeywords && (
          <div>
            <label>Keywords</label>
            <input type="text" name="Keywords" ref={register} />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
