import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                COURSES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                TESTIMONIALS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
