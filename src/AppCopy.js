import React, { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    headline: "",
    bodyText: "",
    imageURL: "",
    remember: false,
  });

  function validate() {
    const { headline, bodyText, imageURL } = formData;
    const valid = headline && headline.length > 3;
    if (!valid) {
      setErrors({ headline: true });
    } else {
      setErrors({});
    }
    return valid;
  }

  function onSubmit(event) {
    event.preventDefault();
    validate() ? console.log(formData) : console.log("invalid");
  }

  function onChange({ target }) {
    const { type, checked, value, name } = target;
    // debugger;
    // console.log(`Before state change: ${JSON.stringify(formData)}`);
    const finalValue = type === "checkbox" ? checked : value;
    setFormData((prevstate) => ({
      ...prevstate,
      [name]: finalValue,
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
      <h1>React Form</h1>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label>Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={onChange}
        />
        {errors.headline && <p>Headline invalid</p>}
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
