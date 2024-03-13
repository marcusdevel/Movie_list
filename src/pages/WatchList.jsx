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
      Films
      <h1>Router funcionando</h1>
    </div>
  );
};

export default WatchList;
