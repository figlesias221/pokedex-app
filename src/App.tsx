import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";
import PokemonList from "./components/PokemonList";
import CaughtPokemonList from "./components/CaughtPokemonList";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
                <Route path="/caught" element={<CaughtPokemonList />} />
            </Routes>
        </Router>
    );
};

export default App;
