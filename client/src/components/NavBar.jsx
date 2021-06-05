import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 id="lacosta-logo">
          <Link to="/landing" className="logo-link">
            La Costa
          </Link>
        </h1>
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-links">
              SEARCH
            </Link>
          </li>
          <li>
            <Link to="/add" className="nav-links">
              ADD
            </Link>
          </li>
          <li>
            <Link to="/landing" className="nav-links">
              LANDING
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
