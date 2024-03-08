import React from "react";
import React, { useState } from "react";
const Page1 = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  return (
    <div>
      <h1>All Films</h1>
      <form>
        <input id="pesquisa" placeholder="Enter a movie title" />
        <button>Pesquisar</button>
      </form>
      <div className="mainPage">
        <img
          src="https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
          alt=""
        />

        <div className="card2">
          <button type="button">View Details</button>
          <button type="button">Watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
