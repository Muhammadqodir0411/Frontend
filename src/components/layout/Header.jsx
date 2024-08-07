import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const Header = () => {
  return (
    <nav className="container">
      <ul className="nav d-flex justify-content-between m-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/portolios">
            Portolios
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
