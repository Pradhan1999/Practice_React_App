import React, { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  //Form values
  const [values2, setValues2] = useState({});
  //Errors
  const [errors, setErrors] = useState({});

  //   console.log("values", values);

  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "username":
        if (value.length <= 4) {
          // we will set the error state

          setErrors({
            ...errors,
            username: "Username atleast have 5 letters",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "username");
          //   setErrors(newObj);
          setErrors({
            ...errors,
            username: "",
          });
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
          return value?.replace(/\s/g, "");
        } else {
          let newObj = omit(errors, "email");
          //   setErrors(newObj);
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    //To stop default events
    event.persist();
    // event.preventDefault();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);
    //Let's set these values in state

    setValues2({
      ...values2,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    // if (event) event.preventDefault();

    // if (Object.values(values2).every((value) => value === "")) {
    //   callback();
    if (
      Object.keys(errors).length === 0 &&
      Object.values(values2).every((value) => value !== "")
    ) {
      callback();
    } else {
      alert("There is an Error!");
    }
  };

  return {
    values2,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
