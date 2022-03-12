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
    <div>
      {items.length > 0 ? (
        <SimpleGrid minChildWidth="250px" spacing={10}>
          {items.map((item) => (
            <FavPokemonCard item={item} />
          ))}
        </SimpleGrid>
      ) : (
        "There is nothing to be shown here."
      )}
    </div>
  );
}

export default Favorites;
