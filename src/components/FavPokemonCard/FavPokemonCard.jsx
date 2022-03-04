//style
import { Box, Button, Image } from "@chakra-ui/react";
//react-router
import { Link } from "react-router-dom";

function FavPokemonCard({ item }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="red.500"
      mt={10}
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
        alt="pokemon-img"
        align="flex-center"
      />
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {capitalizeFirstLetter(item.name)}
      </Box>
      <Box>
        <Link to={`pokemon/${item.id}`}>
          <Button mb={5} border="0px" colorScheme="telegram" size="xs">
            More Info
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default FavPokemonCard;
