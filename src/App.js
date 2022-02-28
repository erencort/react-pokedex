import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Pokemons from "./pages/Pokemons/Pokemons";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
