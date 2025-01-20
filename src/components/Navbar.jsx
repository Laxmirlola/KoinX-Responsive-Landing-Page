// components/Navbar.js
import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <b>Crypto Taxes</b>
        </li>
        <li>
          <b>Free Tools</b>
        </li>
        <li>
          <b>Resource Center</b>
        </li>
        <button className="get-started">Get Started</button>
      </ul>
    </nav>
  );
};

export default Navbar;
