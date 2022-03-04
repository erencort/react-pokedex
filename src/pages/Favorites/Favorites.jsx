//redux
import { useSelector } from "react-redux";
//components
import FavPokemonCard from "../../components/FavPokemonCard/FavPokemonCard";
//style
import { SimpleGrid } from "@chakra-ui/react";
import "./style.css";

function Favorites() {
  const items = useSelector((state) => state.pokemons.favPokemons);
  return (
    <SimpleGrid minChildWidth="250px" spacing={10}>
      {items.map((item) => (
        <FavPokemonCard item={item} />
      ))}
    </SimpleGrid>
  );
}

export default Favorites;
