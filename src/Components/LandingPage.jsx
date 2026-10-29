import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import { IoSearch } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard.jsx";

// imdbID


const apiKey = 'd3fd2ab'

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);



  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchInitialMovies = async () => {
      setLoading(true);
      const defaultQuery = 'Movie';
      setSearchQuery(defaultQuery);
      
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(defaultQuery)}`
        );
        if (response.data.Search) {
          setMovies(response.data.Search.slice(0, 6));
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialMovies();
  }, []);

  const handleSearch = async (e) => {
    e?.preventDefault();
    const input = searchQuery.trim();
    if (!input) return;

    setLoading(true);
    await delay(500);

    try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(input)}`
        );
        if (response.data.Search) {
          setMovies(response.data.Search.slice(0, 6));
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const sortedMovies = [...movies];

    if (value === "A-Z") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (value === "Z-A") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    } else if (value === "Newest") {
      sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    } else if (value === "Oldest") {
      sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
    }
    setMovies(sortedMovies);
    console.log(sortedMovies)
  };

  

  return (
    <section id='home'>
      <div className='landing__page'>
        <div className='landing__wrapper'>
          <div className='landing'>
            <h1 className='landing__title'>
              Welcome to MovieSearch. The best place to find your favorite
              films.
            </h1>
            <form onSubmit={handleSearch} className='input__wrapper'>
              <input
                className="search__input"
                id='myText'
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder='Search Movies'
              />
              <button className="click" onClick={handleSearch}>
                <IoSearch className='mag-icon fa-solid fa-magnifying-glass' />
              </button>
            </form>
            {movies.length > 0 && (
              <div className='filter__wrapper'>
                <select onChange={handleFilterChange} defaultValue=''>
                  <option value='' disabled>
                    Sort by
                  </option>
                  <option value='A-Z'>A-Z</option>
                  <option value='Z-A'>Z-A</option>
                  <option value='Newest'>Newest</option>
                  <option value='Oldest'>Oldest</option>
                </select>
              </div>
            )}
            <div className={`movies ${loading ? "movie__loading" : ""}`}>
              {loading ? (
                <div className='spinner__wrapper'>
                  <FaSpinner className='spinner' />
                </div>
              ) : (
                movies.map((movie) => (
                  <Link to={`${movie.imdbID}`} state={{ imdbID: movie.imdbID }}  className='movie' key={movie.imdbID} >
                    <MovieCard Poster={movie.Poster} Title={movie.Title} Year={movie.Year} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
