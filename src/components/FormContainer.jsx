import { useState } from "react";

const FormContainer = (callback) => {
  //Form values
  const [formValue, setFormValue] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //  Regex
    const userNamePattern = /^[a-zA-Z]*[a-zA-Z]$/;
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^[a-zA-Z](?=.?[a-z])(?=.*?[0-9]).{8,}$/;
    const spaceRemove = /\s/g;

    switch (name) {
      case "username":
        if (!userNamePattern.test(value)) {
          setErrors({
            ...errors,
            username: "Username can only contain characters",
          });
        } else {
          setErrors({
            ...errors,
            username: "",
          });
        }
        break;
      case "email":
        if (!emailPattern.test(value)) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;
      case "phone":
        if (!phonePattern.test(value)) {
          setErrors({
            ...errors,
            phone: "Enter a valid phone number",
          });
        } else {
          setErrors({
            ...errors,
            phone: "",
          });
        }
        break;

      case "password":
        if (!passwordPattern.test(value)) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 characters and containing uppercase,lowercase and numbers",
          });
        } else {
          setErrors({
            ...errors,
            password: "",
          });
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (event) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    //set these values in state
    setFormValue({
      ...formValue,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    // console.log("Error Length in handle submit ", Object.keys(errors).length);

    let errKeys = Object.values(errors) || [];
    let findedErrKeys = [];

    if (errKeys?.length > 0) {
      findedErrKeys = errKeys?.filter((key) => key !== "") || [];
    }

    if (findedErrKeys.length === 0 && Object.values(formValue).length !== 0) {
      callback();
    } else {
      alert("Error while submitting form!");
    }
  };

  return {
    formValue,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default FormContainer;
