import React from "react";
import logo from "./../assets/profile/LN.png";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About me</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
