import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>La Costa Menu</h1>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/add">Add Page</Link>
        </li>
        <li>
          <Link to="/update">Update Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
