import React, { useEffect, useState } from "react";
import Header from "../components/header";
const WatchList = () => {
  const [movies, setMovies] = useState([]);

  const removeFromWatchlist = (movieToRemove) => {
    const updateMovies = movies.filter((movie) => movie !== movieToRemove);
    setMovies(updateMovies);
    localStorage.setItem("watchlist", JSON.stringify(updateMovies));
  };
  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setMovies(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);
  return (
    <div>
      <ul>
      {movies?.map((movie) => (
          <div className="mainPage">
            <img src={movie?.Poster} alt={movie?.Title} />

      </ul>
    </div>
  );
};

export default WatchList;
