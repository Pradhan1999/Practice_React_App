import { useState } from "react";
import "./FormStyle.css";

const Form = () => {
  const initialValues = { username: "", email: "", phone: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e, fieldValue) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: validate(value, fieldValue) });
    console.log("formValues => ", formValues);
  };

  const validate = (values, fieldValue) => {
    //  Regex
    const userNamePattern = /[^a-zA-Z]/g;
    const emailPattern = /^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/;
    const phonePattern = /(?!-)[^0-9.]/g;
    const spaceRemove = /\s/g;

    // console.log('userNamePattern?.test(values?.username) :>> ',phonePattern.test(values));

    if (fieldValue === "username" && userNamePattern.test(values)) {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "Name should be only of characters!" };
      });
      return values?.replace(userNamePattern, "").replace(spaceRemove, "");
    } else {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "" };
      });
    }

    if (fieldValue === "email" && !emailPattern.test(values)) {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "Match the correct pattern!" };
      });
      return values?.replace(emailPattern, "").replace(spaceRemove, "");
    } else {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "" };
      });
    }

    if (fieldValue === "phone" && phonePattern.test(values)) {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "Please enter numbers only!" };
      });
      return values?.replace(phonePattern, "").replace(spaceRemove, "");
    } else {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "" };
      });
    }
    if (fieldValue === "password" && spaceRemove.test(values)) {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "Match the correct pattern!" };
      });
      return values?.replace(spaceRemove, "");
    } else {
      setFormErrors((prev) => {
        return { ...prev, [fieldValue]: "" };
      });
    }
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
        {formErrors?.username && <p>{formErrors?.username}</p>}

        <input
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={(e) => handleChange(e, "email")}
        />
        {formErrors?.email && <p>{formErrors?.email}</p>}

        <input
          name="phone"
          placeholder="Phone No."
          value={formValues?.phone}
          onChange={(e) => handleChange(e, "phone")}
          maxLength={10}
        />
        {formErrors?.phone && <p>{formErrors?.phone}</p>}

        <input
          name="password"
          placeholder="Password"
          value={formValues?.password}
          minLength={6}
          onChange={(e) => handleChange(e, "password")}
        />
        {formErrors?.password && <p>{formErrors?.password}</p>}
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};

export default Form;
