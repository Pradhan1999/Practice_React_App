import React from "react";
import { Link } from "react-router-dom";
import "./AboutStyle.css";

const About = () => {
  return (
    <div>
      <div className="box">
        <div>
          <h1>Login to see details</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="svg">
          <img
            src="/Friendly_Sitting.png"
            alt="Friendly_Sitting.png"
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
