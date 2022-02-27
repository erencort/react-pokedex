import "./App.css";
import Header from "./components/Header/Header";

import Pokemons from "./pages/Pokemons/Pokemons";

function App() {
  return (
    <div className="App">
      <Header />
      <Pokemons />
    </div>
  );
}

export default App;
