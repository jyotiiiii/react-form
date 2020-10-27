import React, { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    headline: "",
    bodyText: "",
    imageURL: "",
  });

  // function validate({ username }) {
  //   const valid = username && username.length > 3;
  //   if (!valid) {
  //     setErrors({ username: true });
  //   } else {
  //     setErrors({});
  //   }
  //   return valid;
  // }

  function onSubmit(event) {
    event.preventDefault();

    // validate(formData) ? console.log(formData) : console.log("invalid");
  }

  function onChange({ target }) {
    console.log(target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData((prevstate) => ({
      ...prevstate,
      [target.name]: value,
    }));
  }

  function addImage() {
    const currentImages = images;
    currentImages.push(formData.imageURL);
    setImages([...currentImages]);
    console.log({ images });
  }

  return (
    <div>
      <h1>react-hook-form</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label>Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={onChange}
        />
        {errors.headline && <p>Username invalid</p>}
        <label>Article Body</label>
        <input
          type="text"
          name="bodyText"
          value={formData.bodyText}
          onChange={onChange}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="imageURL"
          value={formData.imageURL}
          onChange={addImage}
        />

        <button onClick={addImage}>add image URL</button>

        {images.map((image, index) => (
          <p key={index}>{image}</p>
        ))}

        {/* <span>
          <input
            type="checkbox"
            name="remember"
            value={formData.remember}
            onChange={onChange}
          />
          <label>Remember Me</label>
        </span> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
