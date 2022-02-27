import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/pokemonsSlice";
import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

function Pokemons() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.items);
  const status = useSelector((state) => state.pokemons.status);
  const message = useSelector((state) => state.pokemons.error);
  const isAllDataFetched = useSelector(
    (state) => state.pokemons.isAllDataFetched
  );

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (status === "failed") {
    return <Error error={message} />;
  }

  return (
    <div>
      <SimpleGrid columns={6} spacing={10}>
        {pokemons.map((item, index) => (
          <div key={index + 1}>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="red.500"
              mt={10}
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt="pokemon-img"
                align="flex-center"
              />
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {capitalizeFirstLetter(item.name)}
              </Box>
            </Box>
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
