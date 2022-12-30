import React, {useState} from "react";

import "./style.css";

const Form = () => {
    const [username, setUsername] = useState("")
    console.log('username', username)
  return (
    <div className="form">
      <h1>Form</h1>
      <div className="formInput" onChange={e=>setUsername(e.target.value)}>
        <input type="text" name="Username" placeholder="Username" />
        <br />
        <input type="email" name="Email" placeholder="Email" />
        <br />
        <input type="tel" name="Phone" placeholder="Phone No." />
        <br />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Form;
