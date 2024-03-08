import React from "react";

const Page1 = () => {
  return (
    <div className="mainPage">
      <h1>All Films</h1>
      <form>
        <input id="pesquisa" placeholder="Search" />
        <button>Pesquisar</button>
      </form>
      <img
        src="https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        alt=""
      />

      <div className="card2">
        <button type="button">View Details</button>
        <button type="button">Watchlist</button>
      </div>
    </div>
  );
};

export default Page1;
