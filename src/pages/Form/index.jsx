import React from "react";
// import useForm2 from "./pages/Form2/useForm";
import FormContainer from "../../components/FormContainer";
import "./FormStyle.css";

const Form = () => {
  //Final submit function
  const formLogin = () => {
    console.log("Form submitted successfully!");
    console.log("Form Values are: ", formValue);
  };

  //Custom hook call
  const { handleChange, formValue, errors, handleSubmit } =
    FormContainer(formLogin);

  return (
    <div className="container">
      <div className="form">
        <h1>Custom Form</h1>
        <input
          type="text"
          minLength="5"
          required
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone No."
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
        <input
          minLength="8"
          // type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button onClick={handleSubmit} value="Submit" className="btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
