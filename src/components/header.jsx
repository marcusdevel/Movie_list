import React from "react";
import Frame17 from "../assets/Frame17.png";

const header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={Frame17} alt="logo" />
        <ul>
          <li>
            <a href="#">Search</a>
            <a href="#">My Wacthlist</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
