import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CircularProgress,
} from "@mui/material";
import { getPokemonDetails } from "../services/api";

const PokemonDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [pokemon, setPokemon] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            if (name) {
                const details = await getPokemonDetails(name);
                setPokemon(details);
                setLoading(false);
            }
        };
        fetchPokemonDetails();
    }, [name]);

    if (loading) {
        return <CircularProgress />;
    }

    if (!pokemon) {
        return <Typography variant="h6">Pokémon not found.</Typography>;
    }

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    alt={pokemon.name}
                    image={pokemon.sprites.front_default}
                    title={pokemon.name}
                    style={{ maxWidth: 300, margin: "auto" }}
                />
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
                </CardContent>
            </Card>
        </Container>
    );
};

export default PokemonDetails;
