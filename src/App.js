//react-router
import { Routes, Route } from "react-router-dom";
//pages
import Pokemons from "./pages/Pokemons/Pokemons";
import Detail from "./pages/Detail/Detail";
import Favorites from "./pages/Favorites/Favorites";
//components
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
//style
import "./App.css";
import MemoryGame from "./pages/MemoryGame/MemoryGame";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemon/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="favorites/pokemon/:id" element={<Detail />} />
        <Route path="memorygame" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default App;
