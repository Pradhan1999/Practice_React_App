import { useState, useEffect } from "react";
import "./FormStyle.css";

const Form = () => {
  const initialValues = { username: "", email: "", phone: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    // const regexUsername = "^[A-Za-z][A-Za-z0-9_]{7,29}$";
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexUsername = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone Number is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Custom Form</h1>
        <input
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        <p>{formErrors.username}</p>

        <input
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>

        <input
          name="phone"
          placeholder="Phone No."
          value={formValues.phone}
          onChange={handleChange}
        />
        <p>{formErrors.phone}</p>

        <input
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p>{formErrors.password}</p>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
