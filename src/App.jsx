import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Movie from "./Pages/Movie.jsx";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/' element={<Movie />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
