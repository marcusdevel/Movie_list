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
          <div className="addMovie">
            <img src={movie?.Poster} alt={movie?.Title} />
            <div className="info-card">
              <h2>{movie?.Title}</h2>
              <p>Year: {movie?.Year}</p>
              <p>Rated: {movie?.Rated}</p>
              <p>Plot: {movie?.Plot}</p>
              <button type="button">View Details</button>

              <button type="button" onClick={() => removeFromWatchlist(movie)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
