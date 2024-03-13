import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Page1 = ({watchlist, setWatchlist}) => {
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

      
  return (
    <div className="page">
      <h1>What would you like to watch?</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="pesquisa"
          placeholder="Enter a movie title"
          value={movieTitle}
          onChange={handleChange}
        />
        <button type="submit">Pesquisar</button>
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
            <button type="button">Watchlist</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page1;
