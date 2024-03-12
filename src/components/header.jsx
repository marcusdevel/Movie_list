import React from "react";
import Frame17 from "../assets/Frame17.png";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={Frame17} alt="logo" />
        <ul>
          <li>
            <Link to="/">Search</Link>
            <Link to="/WatchList">My Wacthlist</Link>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
