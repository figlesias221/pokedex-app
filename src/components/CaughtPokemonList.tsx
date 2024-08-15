import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
} from "@mui/material";

const CaughtPokemonList: React.FC = () => {
    const [caughtPokemons, setCaughtPokemons] = useState<any[]>([]);

    useEffect(() => {
        const storedPokemons = JSON.parse(
            localStorage.getItem("caughtPokemons") || "[]"
        );
        setCaughtPokemons(storedPokemons);
    }, []);

    if (caughtPokemons.length === 0) {
        return (
            <Typography variant="h6">
                You haven't caught any Pokémon yet.
            </Typography>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Caught Pokémon
            </Typography>
            <Grid container spacing={2}>
                {caughtPokemons.map((p) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={p.name}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={p.name}
                                image={p.sprite}
                                title={p.name}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {p.name.charAt(0).toUpperCase() +
                                        p.name.slice(1)}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {p.types.join(", ")}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CaughtPokemonList;
