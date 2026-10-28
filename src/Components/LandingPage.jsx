import React from "react";
import "./LandingPage.css";
import { IoSearch } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import poster from "../assets/poster-ex.jpg";

const LandingPage = () => {
  return (
    <>
      <section id='home'>
        <div className='landing__page'>
          <div className='landing__wrapper'>
            <div className='landing'>
              <h1 className='landing__title'>
                Welcome to MovieSearch. The best place to find the right movie.
              </h1>
              <h2 className='landing__sub-title'>
                Let's find that Perfect Movie
              </h2>
              <div className='search__bar'>
                <div className='input__wrapper'>
                  <input
                    className='search__input'
                    id='myText'
                    type='text'
                    placeholder='search by genre or title'
                  />
                  <button className='search__btn click'>
                    <IoSearch className='mag-icon' />
                  </button>
                </div>
              </div>
              <select id='filter' defaultValue=''>
                <option value='' disabled>
                  Sort
                </option>
                <option value='A-Z'>Title, A - Z</option>
                <option value='Z-A'>Title, Z - A</option>
                <option value='Newest'>Age, Newer to Older</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section id='movies__section'>
        <div className='movies'>
          <FaSpinner className='fa-solid FaSpinner movie__loading--spinner' />
          <div className='movie'>
            <div className='movie-poster'>
              <img className='movie__img' src={poster} alt='movie' />
            </div>
            <div className='movie__title-wrapper'>
              <h3 className='movie__title'>"bladerunner"</h3>
            </div>
            <h4 className='movie__year'>"2022"</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
