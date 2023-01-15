import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginStyle.css";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      navigate("/");
    } else {
      alert("Wrong email/password !");
    }
  };
  return (
    <div>
      <div className="wrapper">
        <section>
          <div className="row">
            <div id="col-1" className="col">
              <div id="sign-up-form" className="form">
                <h1>Login</h1>
                <form onsubmit={handleLogin}>
                  <label for="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={input.email}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <span id="span-email-1">Email</span>
                  </label>
                  <label for="password">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={input.password}
                      onChange={(e) =>
                        setInput({
                          ...input,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <span id="span-password">Password</span>
                  </label>
                  {/* _______Submit Button________ */}
                  <input type="submit" value="Login" />
                </form>
              </div>
            </div>
            <div id="col-2" className="col">
              <div id="login" className="info">
                <h2>Don't have an account?</h2>
                <Link to="/register">
                  <button onclick="formChange('login')">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
