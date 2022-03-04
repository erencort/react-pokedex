//style
import "./style.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
        alt="pokeball"
      />
      <h1 className="header-name">Pokedex</h1>
    </div>
  );
}

export default Header;
