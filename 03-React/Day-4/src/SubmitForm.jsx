import { useState } from "react";
import Formdata from "./Formdata";
function SubmitForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    // checking the validations
    // if(formData.name == ""){
    //     console.log("Name is required")
    //     return
    // }
    // if(formData.email == ""){
    //     console.log("email is required")
    //     return
    // }
    // if(formData.password == ""){
    //     console.log("password is required")
    //     return
    // }

    const newerror = {};
    if (formData.name === "") {
      newerror.name = "Name is required";
    }
    if (formData.email === "") {
      newerror.email = "email is required";
    }
    if (formData.password === "") {
      newerror.password = "password is required";
    }

    setError(newerror);

    if(Object.keys(newerror).length > 0 ){
        return 
    }else {
        console.log(formData)
    }

    
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
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}

        <h1>{formData.email}</h1>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
         {error.email && <p style ={{color:'red'}}>{error.email}</p>}

        <h1>{formData.password}</h1>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
          {error.password && <p style ={{color:'red'}}>{error.password}</p>}
        <br />
        <h1></h1>

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default SubmitForm;
