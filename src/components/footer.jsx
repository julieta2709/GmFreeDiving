import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h6>Seguinos en nuestras redes!</h6>
      <FaInstagram className="ig-icon"/>
    </div>
  );
};

export default Footer;
