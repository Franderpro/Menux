import React from "react";
import { Link } from "react-router";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Menux</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
