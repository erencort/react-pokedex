import React, { useEffect, useState } from "react";
import { Box, Button, Image, Icon } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { setFavPokemons } from "../../redux/pokemonsSlice";
import { useDispatch } from "react-redux";
import "./style.css";
import { useSelector } from "react-redux";

function PokemonCard({ index, item }) {
  const id = index + 1;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const favPokemons = useSelector((state) => state.pokemons.favPokemons);

  const [isInFavs, setIsInFavs] = useState(false);
  const dispatch = useDispatch();

  const setFavsHandler = () => {
    setIsInFavs(!isInFavs);
    dispatch(setFavPokemons({ name: item.name, id: id }));
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
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon-img"
        align="flex-center"
      />
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {capitalizeFirstLetter(item.name)}
      </Box>
      <Box>
        <Link to={`pokemon/${id}`}>
          <Button mb={5} border="0px" colorScheme="telegram" size="xs">
            More Info
          </Button>
        </Link>
        <Box display="flex">
          {isInFavs ? (
            <Icon
              className="icon"
              onClick={setFavsHandler}
              w={8}
              h={8}
              mt={5}
              ml={7}
              pb={3}
              as={AiFillHeart}
            />
          ) : (
            <Icon
              className="icon"
              onClick={setFavsHandler}
              w={8}
              h={8}
              mt={5}
              ml={7}
              pb={3}
              as={AiOutlineHeart}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default PokemonCard;
