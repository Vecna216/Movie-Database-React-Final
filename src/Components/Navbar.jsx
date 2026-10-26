import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="header__wrapper">
        <div className="logo__wrapper">
          <img src={logo} className="logo" alt=""/>
        </div>
        <ul className="nav__links">
          <li>
            <a href="#home" className="nav__link link__hover-effect">Home</a>
          </li>
          <li>
            <a href="#movies__section" className="nav__btn">Find a Movie</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
