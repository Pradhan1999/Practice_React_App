import React from "react";

import { Link } from "react-router-dom";

import homeOutline from "../assets/homeOutline.gif";
import bellOutline from "../assets/bellOutline.gif";
import skillsOutline from "../assets/skillsOutline.gif";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={homeOutline} alt="gif" width={50} />
      </Link>
      <Link to="/about">
        <img src={skillsOutline} alt="gif" width={50} />
      </Link>
      <Link to="/">
        <img src={bellOutline} alt="gif" width={50} />
      </Link>
    </nav>
  );
};

export default Navbar;
