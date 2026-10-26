import React from 'react'
import './LandingPage.css'
import { IoSearch } from "react-icons/io5";
const LandingPage = () => {
  return (
    <>
        <section id="home">
      <div className="landing__page">
        <div className="landing__wrapper">
          <div className="landing">
            <h1 className="landing__title">Welcome to MovieSearch. The best place to find the right movie.</h1>
            <h2 className="landing__sub-title">Let's find that Perfect Movie</h2>
            <div className="search__bar">
              <div className="input__wrapper">
                <input className="search__input" id="myText" type="text" placeholder="search by genre or title"/>
                <button className="search__btn click" ><IoSearch className='mag-icon'/></button>
              </div>
            </div>
            <select id="filter" onchange="filterMovies(event)">
              <option value="" disabled selected>Sort</option>
              <option value="A-Z">Title, A - Z</option>
              <option value="Z-A">Title, Z - A</option>
              <option value="Newest">Age, Newer to Older</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default LandingPage
