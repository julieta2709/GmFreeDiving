import React from "react";
import "../Styles/header.css";
import NavBar from "./navBar";

const Header = () => {
  return (
    <div className="header-container">
      <NavBar />
      <h1>GM Freediving</h1>
      <h2>Descubre el mundo submarino</h2>
    </div>
  );
};

export default Header;
