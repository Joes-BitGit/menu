import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const NavBar = () => {
  return (
    <div className="navbar-header">
      <h1>
        <Link to="/landing">La Costa</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">SEARCH</Link>
        </li>
        <li>
          <Link to="/add">ADD</Link>
        </li>
        <li>
          <Link to="/landing">LANDING</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
