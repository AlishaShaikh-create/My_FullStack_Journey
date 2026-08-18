import { useState } from "react";
function EmailValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const newError = {};
    if (formData.name === "") {
      newError.name = "name is required";
    }
    // Email validation 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email === "") {
      newError.email = "email is required";
    }
    else if (!emailPattern.test(formData.email)){
        newError.email = "Enter the valid email"
    }

    setError(newError);

    if (Object.keys(newError).length > 0) {
      return;
    }
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{formData.name}</h1>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter the name" />
        {error.name && <p>{error.name}</p>}
        <h1>{formData.email}</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=" Enter the value"
        />
        {error.email && <p>{error.email}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default EmailValidation;
