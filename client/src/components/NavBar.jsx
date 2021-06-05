import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/navbar.css";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState("menu-toggle");
  const [mobileNavMenu, setMobileNavMenu] = useState("nav-menu");
  const handleMobileClick = () => {
    menuToggle === "menu-toggle"
      ? setMenuToggle(`${menuToggle} is-active`)
      : setMenuToggle("menu-toggle");

    mobileNavMenu === "nav-menu"
      ? setMobileNavMenu(`${mobileNavMenu} active`)
      : setMobileNavMenu("nav-menu");
  };
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1 id="lacosta-logo">
          <Link to="/landing" className="logo-link">
            La Costa
          </Link>
        </h1>
        <div
          className={`${menuToggle}`}
          id="mobile-menu"
          onClick={handleMobileClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`${mobileNavMenu}`}>
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
