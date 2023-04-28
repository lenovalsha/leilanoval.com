import React from "react";
import logo from "./../assets/profile/LN.png";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} />
      <ul>
        <li>
          <a href="#root">Home</a>
        </li>
        <li>
          <a href="#skill">Skills</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#root">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
