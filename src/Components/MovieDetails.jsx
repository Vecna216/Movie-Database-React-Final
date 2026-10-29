import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
const apiKey = "d3fd2ab";
import poster from "../assets/poster-ex.jpg";
import axios from "axios";

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const movieId = window.location.pathname.slice(1);
  const apiKey = "d3fd2ab";

  useEffect(() => {
  const fetchInitialMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`,
      );
      if (response.data) {
        setMovies(response.data);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  if (movieId && apiKey) {
    fetchInitialMovies();
  }
}, [movieId, apiKey]);

  return (
    <div>
      <div className="details">
        <div>
          <img className='movie__img-details' src={movies.Poster} alt='' />
        </div>
        <div className="movie__details">
          <h1 className="title">{movies.Title}</h1>
          <p>Genre: {movies.Genre}</p>
          <p>Rating: {movies.Rated}</p>
          <p>Released: {movies.Released}</p>
          <p>Director: {movies.Director}</p>
          <p>Writer: {movies.Writer}</p>
          <p>Runtime: {movies.Runtime}</p>
          <p>Actors: {movies.Actors}</p>
          <h2>{movies.Plot}</h2>
          <p>ImdbRating: {movies.imdbRating}/10</p>

        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
