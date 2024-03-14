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
    <div className="page">
      <ul>
        {movies?.map((movie) => (
          <div className="addMovie">
            <img src={movie?.Poster} alt={movie?.Title} />
            <div className="infoCardAddMovie">
              <h2>{movie?.Title}</h2>
              <p> {movie?.Genre}</p>
              <p> {movie?.imdbRating}</p>
              <p> {movie?.Plot}</p>
              <div className="buttons">
                <button type="button" id="detail">
                  View Details
                </button>

                <button
                  type="button"
                  id="remove"
                  onClick={() => removeFromWatchlist(movie)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
