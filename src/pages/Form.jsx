import { useState } from "react";
import "./FormStyle.css";

const Form = () => {
  const initialValues = { username: "", email: "", phone: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e, fieldValue) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: validate(value, fieldValue) });
    // setFormErrors();
    // setIsSubmit(true);
    setFormErrors(validate(formValues));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   // setIsSubmit(true);
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  const validate = (values, fieldValue) => {
    const errors = {};

    // const regexUsername = "^[A-Za-z][A-Za-z0-9_]{7,29}$";
    //  Regex
    const userNamePattern = /[^A-Za-z]*$/gm;
    const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phonePattern = /^[0-9-+]*$/;
    const spaceRemove = /\s/g;
    // if (values) {
    //   return values.replace(spaceRemove,'')
    // }

    //      if (fieldValue === 'username') {
    //         if (!Usernames?.test(values.username)) {
    //          errors.username = "space is not allowed";
    //          return values.replace(/[^a-zA-Z]/g,'').replace(spaceRemove,'');
    //        }
    if (fieldValue === "username" && userNamePattern?.test(values.username)) {
      return values.replace(userNamePattern, "").replace(spaceRemove, "");
    }
    return (errors.username = "space is not allowed");

    // if (fieldValue === "email" && !emailPattern?.test(values.email)) {
    //   return values.replace(emailPattern, "").replace(spaceRemove, "");
    // }

    //      }
    //  return '';
    // __________
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }else if (!Usernames?.test(values.username)) {
    //   errors.username = "space is not allowed";
    // }

    // if (!values.email) {
    //   errors.email = "Email is required!";
    // } else if (!regexEmail?.test(values.email)) {
    //   errors.email = "This is not a valid email format!";
    // }

    // if (!values.phone) {
    //   errors.phone = "Phone Number is required";
    // }else if (!regPhone?.test(values.phone)) {
    //   errors.phone = "This is not a valid email formattffukguy!";
    // }

    // if (!values.password) {
    //   errors.password = "Password is required";
    // } else if (values.password.length < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password.length > 15) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }

    // return errors;
  };

  return (
    <div className="container">
      <div className="form">
        <h1>Custom Form</h1>
        <input
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <p>{formErrors?.username}</p>

        <input
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <p>{formErrors?.email}</p>

        <input
          name="phone"
          placeholder="Phone No."
          value={formValues?.phone}
          onChange={(e) => handleChange(e, "phone")}
        />
        <p>{formErrors?.phone}</p>

        <input
          name="password"
          placeholder="Password"
          value={formValues?.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <p>{formErrors?.password}</p>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
