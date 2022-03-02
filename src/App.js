import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons/Pokemons";
import Detail from "./pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./pages/Favorites/Favorites";

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
      </Routes>
    </div>
  );
}

export default App;
