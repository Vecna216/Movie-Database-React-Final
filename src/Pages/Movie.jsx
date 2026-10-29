import React from "react";
import MovieDetails from "../Components/MovieDetails";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";




const Movie = () => {

  return (
    <div>
      <Navbar />
      <MovieDetails  />
      <Footer />
    </div>
  );
};

export default Movie;
