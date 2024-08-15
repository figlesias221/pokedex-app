import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import CaughtPokemonList from "./components/CaughtPokemonList";

const App: React.FC = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Pokédex App
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/caught">
                        Caught Pokémon
                    </Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: "2rem" }}>
                <Routes>
                    <Route path="/" element={<PokemonList />} />
                    <Route path="/pokemon/:id" element={<PokemonDetails />} />
                    <Route path="/caught" element={<CaughtPokemonList />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
