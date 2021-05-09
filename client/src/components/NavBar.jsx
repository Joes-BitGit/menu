import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>La Costa</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/add">ADD</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
