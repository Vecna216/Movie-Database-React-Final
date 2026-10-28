import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <img class='footer__logo' src={logo} alt='' />
        <p class='copyright'>Copyright © Andy Jackson 2026</p>
      </footer>
    </>
  );
};

export default Footer;
