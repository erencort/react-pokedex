import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/pokemonsSlice";
import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.items);
  const status = useSelector((state) => state.pokemons.status);
  const message = useSelector((state) => state.pokemons.error);
  const isAllDataFetched = useSelector(
    (state) => state.pokemons.isAllDataFetched
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error error={message} />;
  }

  return (
    <div>
      <SimpleGrid minChildWidth="250px" spacing={10}>
        {pokemons.map((item, index) => (
          <div key={index + 1}>
            <PokemonCard item={item} index={index} />
          </div>
        ))}
      </SimpleGrid>
      {isAllDataFetched ? (
        <div style={{ margin: "3rem" }}>"There is nothing to be shown"</div>
      ) : status === "loading" ? (
        <Loading />
      ) : (
        <Button
          mt={10}
          colorScheme="blue"
          onClick={() => dispatch(fetchPokemons())}
        >
          Load More
        </Button>
      )}
    </div>
  );
}
export default Pokemons;
