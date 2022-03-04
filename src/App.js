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
