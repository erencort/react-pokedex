import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Favorites() {
  const items = useSelector((state) => state.pokemons.favPokemons);
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
