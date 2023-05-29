import React, { useState } from "react";
import logo from "./../assets/profile/LN.png";

const Navbar = () => {
  const [isChange, setIsChange] = useState(false);
  const Change = () => {
    setIsChange(!isChange);
  };
  return (
    <div className="nav-container">
      <nav className={`navbar ${isChange ? "change" : ""}`}>
        <a href="#">
          <img className="logo" src={logo} />
        </a>
        <div className="hamburger-menu" onClick={Change}>
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#skill" className="nav-link">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#project" className="nav-link">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
