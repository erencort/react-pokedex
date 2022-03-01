import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <Link to="/">
          <li>Pokemons</li>
        </Link>
        <Link to="favorites">
          <li>Favorites</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
