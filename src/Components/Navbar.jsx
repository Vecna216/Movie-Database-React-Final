import React from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="header__wrapper">
        <div className="logo__wrapper">
          <img src={logo} className="logo" alt=""/>
        </div>
        <ul className="nav__links">
          <Link to="/" className="nav__link link__hover-effect">Home</Link>
          <Link to="/" className="nav__btn">Find a Movie</Link>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
