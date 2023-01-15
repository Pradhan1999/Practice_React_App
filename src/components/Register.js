import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./RegisterStyle.css";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const hadleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row">
            <div id="col-1" className="col">
              <div id="sign-up-form" className="form">
                <h1>Sign Up</h1>
                <form onSubmit={hadleSubmit}>
                  <label htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      value={input.name}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      type="text"
                      placeholder=""
                    />
                    <span id="span-email-1">Name</span>
                  </label>
                  <label htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      type="email"
                      placeholder=""
                    />
                    <span id="span-email-1">Email</span>
                  </label>
                  <label htmlFor="password">
                    <input
                      id="password"
                      name="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                      type="password"
                      placeholder=""
                    />
                    <span id="span-password">Set Password</span>
                  </label>
                  {/* _______Submit Button________ */}
                  <input type="submit" value="Sign-up" />
                </form>
              </div>
            </div>
            <div id="col-2" className="col">
              <div id="login" className="info">
                <h2>Have an account?</h2>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
