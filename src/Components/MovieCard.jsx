import React from "react";
import "./MovieCard.css";

const MovieCard = ({Poster, Title, Year }) => {
  return (
    <>
      <div className='movie-poster'>
        <img className='movie__img' src={Poster} alt={Title} />
      </div>
      <div className='movie__title-wrapper'>
        <h3 className='movie__title'>{Title}</h3>
      </div>
      <h4 className='movie__year'>{Year}</h4>
    </>
  );
};

export default MovieCard;
