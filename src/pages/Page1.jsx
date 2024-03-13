import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vectorimg from "../assets/Vector.png";
const Page1 = ({ watchlist, setWatchlist }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=18753e07`
    );
    const data = await response.json();
    if (data.Response === "False") {
      alert("Filme não encontrado");
    } else {
      setMovieDetails(data);
    }
  };
  const addToWatchlist = () => {
    if (movieDetails) {
      setWatchlist([...watchlist, movieDetails]);
      alert("Filme adicionado à watchlist!");

      localStorage.setItem(
        "watchlist",
        JSON.stringify([...watchlist, movieDetails])
      );
    }
  };
  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      setWatchlist(JSON.parse(localStorage.getItem("watchlist")));
    }
  }, []);

  return (
    <div className="page">
      <h1>What would you like to watch?</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-form">
          <input
            name="pesquisa"
            placeholder="Enter a movie title"
            value={movieTitle}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            <img className="vector-img" src={vectorimg} alt="vector" />
          </button>
        </div>
      </form>

      {movieDetails && (
        <div className="mainPage">
          <img src={movieDetails.Poster} alt={movieDetails.Title} />

          <div className="info-card">
            <h2>{movieDetails.Title}</h2>
            <p>Year: {movieDetails.Year}</p>
            <p>Rated: {movieDetails.Rated}</p>
            <p>Plot: {movieDetails.Plot}</p>
            <button type="button">View Details</button>
            <button type="button" onClick={addToWatchlist}>
              Watchlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page1;
