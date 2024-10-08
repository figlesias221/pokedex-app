import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Button,
    CircularProgress,
} from "@mui/material";
import { getPokemonDetails } from "../services/api";

const PokemonDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [caught, setCaught] = useState<boolean>(false);
    const [animating, setAnimating] = useState<boolean>(false);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            if (name) {
                const details = await getPokemonDetails(name);
                setPokemon(details);
                setLoading(false);

                const caughtPokemons = JSON.parse(
                    localStorage.getItem("caughtPokemons") || "[]"
                );
                setCaught(caughtPokemons.some((p: any) => p.name === name));
            }
        };
        fetchPokemonDetails();
    }, [name]);

    const catchPokemon = () => {
        if (pokemon && !caught) {
            const caughtPokemons = JSON.parse(
                localStorage.getItem("caughtPokemons") || "[]"
            );
            caughtPokemons.push({
                name: pokemon.name,
                sprite: pokemon.sprites.front_default,
                types: pokemon.types.map((t: any) => t.type.name),
            });
            localStorage.setItem(
                "caughtPokemons",
                JSON.stringify(caughtPokemons)
            );
            setCaught(true);
            setAnimating(true);

            setTimeout(() => {
                setAnimating(false);
            }, 1500); // Animation duration
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (!pokemon) {
        return <Typography variant="h6">Pokémon not found.</Typography>;
    }

    return (
        <Container>
            <Card style={{ textAlign: "center" }}>
                <div style={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        alt={pokemon.name}
                        image={pokemon.sprites.front_default}
                        title={pokemon.name}
                        style={{
                            maxWidth: 300,
                            margin: "20px auto",
                            transition: "transform 1.5s ease-in-out",
                            transform: animating ? "rotate(360deg)" : "none", // Apply rotation when animating
                        }}
                    />
                </div>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {pokemon.name.charAt(0).toUpperCase() +
                            pokemon.name.slice(1)}
                    </Typography>
                    <Typography variant="body1">
                        Types:{" "}
                        {pokemon.types
                            .map((type: any) => type.type.name)
                            .join(", ")}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={catchPokemon}
                        disabled={caught}
                        style={{ marginTop: "1rem" }}
                    >
                        {caught ? "Caught!" : "Catch"}
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PokemonDetails;
