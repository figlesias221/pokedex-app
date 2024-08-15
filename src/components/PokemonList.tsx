import React from "react";
import {
    Container,
    Grid,
    TextField,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
} from "@mui/material";
import usePokemon from "../hooks/usePokemon";

const PokemonList: React.FC = () => {
    const { pokemon, searchTerm, setSearchTerm, loading } = usePokemon();

    console.log(pokemon);

    return (
        <Container>
            <TextField
                label="Search Pokémon"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={2}>
                    {pokemon.map((p) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={p.name}>
                            <Card>
                                {p.sprite && (
                                    <CardMedia
                                        component="img"
                                        alt={p.name}
                                        image={p.sprite}
                                        title={p.name}
                                    />
                                )}
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {p.name.charAt(0).toUpperCase() +
                                            p.name.slice(1)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default PokemonList;
