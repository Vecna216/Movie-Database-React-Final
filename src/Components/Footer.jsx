import React from "react";
import "./Footer.css";
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <img className='footer__logo' src={logo} alt='' />
        <p className='copyright'>Copyright © Andy Jackson 2026</p>
      </footer>
    </>
  );
};

export default Footer;
