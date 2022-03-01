import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import "./style.css";

function Detail() {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let { id } = useParams();
  const [pokeInfo, setPokeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}pokemon/${id}`)
      .then((res) => setPokeInfo(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1>{capitalizeFirstLetter(pokeInfo.name)}</h1>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="poke-img" />
      <h3>Abilities</h3>
      <ul>
        {pokeInfo.abilities.map((item, index) => (
          <li key={index}>{item.ability.name}</li>
        ))}
      </ul>
      <h3>Stats</h3>
      <ul>
        {pokeInfo.stats.map((item, index) => (
          <li key={index}>
            {item.stat.name}:{item.base_stat}
          </li>
        ))}
        <li>height:{pokeInfo.height}</li>
      </ul>
    </div>
  );
}

// pokemon image
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png

export default Detail;
