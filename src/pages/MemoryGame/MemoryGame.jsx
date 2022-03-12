import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MemoryGameCard from "../../components/MemoryGameCard/MemoryGameCard";
import { SimpleGrid } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const cardImages = [
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
  {
    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Math.floor(
      Math.random() * 500
    )}.png`,
    matched: false,
  },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prev) => {
          return prev.map((item) => {
            if (item.src === firstChoice.src) {
              return { ...item, matched: true };
            } else {
              return item;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((item) => ({ ...item, id: Math.random() }));
    setCards(shuffledCards);
    setTurn(0);
  };

  const handleChoice = (item) => {
    firstChoice ? setSecondChoice(item) : setFirstChoice(item);
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn(turn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div>
      <h1 style={{ margin: "0rem" }}>Turn: {turn}</h1>
      <SimpleGrid
        margin="auto"
        width="60rem"
        minChildWidth="200px"
        spacing={10}
      >
        {cards.map((item) => (
          <MemoryGameCard
            item={item}
            key={item.id}
            handleChoice={handleChoice}
            flipped={
              item === firstChoice || item === secondChoice || item.matched
                ? "yes"
                : "no"
            }
            disabled={disabled}
          />
        ))}
      </SimpleGrid>
      <div>
        <Button
          mt={5}
          mb={5}
          border="0px"
          colorScheme="telegram"
          onClick={shuffleCards}
        >
          New Game
        </Button>
      </div>
    </div>
  );
}

export default MemoryGame;
