//react-router
import { Link } from "react-router-dom";
//style
import { Button } from "@chakra-ui/react";
import "./style.css";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <Link to="/">
          <li>
            <Button ml={5} p={4} border="none" colorScheme="blue" size="xs">
              Pokemons
            </Button>
          </li>
        </Link>
        <Link to="favorites">
          <li>
            <Button ml={7} p={4} border="none" colorScheme="blue" size="xs">
              Favorites
            </Button>
          </li>
        </Link>
        <Link to="memorygame">
          <li>
            <Button ml={7} p={4} border="none" colorScheme="blue" size="xs">
              Memory Game
            </Button>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
