import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 id="lacosta-logo">
          <Link to="/landing">La Costa</Link>
        </h1>
        <ul className="nav-menu">
          <li className="nav-links">
            <Link to="/">SEARCH</Link>
          </li>
          <li className="nav-links">
            <Link to="/add">ADD</Link>
          </li>
          <li className="nav-links">
            <Link to="/landing">LANDING</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
