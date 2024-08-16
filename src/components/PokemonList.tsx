import React from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Grid,
    TextField,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CircularProgress,
    Button,
} from "@mui/material";
import usePokemon from "../hooks/usePokemon";

const PokemonList: React.FC = () => {
    const {
        pokemon,
        searchTerm,
        setSearchTerm,
        loading,
        currentPage,
        setCurrentPage,
        totalPages,
    } = usePokemon();

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
                <>
                    <Grid container spacing={2}>
                        {pokemon.map((p) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={p.name}
                            >
                                <Card
                                    component={Link}
                                    to={`/pokemon/${p.name}`}
                                    style={{
                                        textDecoration: "none",
                                        borderRadius: "15px",
                                        boxShadow:
                                            "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        overflow: "hidden",
                                        transition: "transform 0.2s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform =
                                            "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform =
                                            "scale(1)")
                                    }
                                >
                                    <CardMedia
                                        component="img"
                                        alt={p.name}
                                        image={p.sprite}
                                        title={p.name}
                                        style={{
                                            width: "200px",
                                            height: "200px",
                                            borderRadius: "50%",
                                            margin: "20px auto 0",
                                            backgroundColor: "#f2f2f2",
                                            display: "block",
                                        }}
                                    />
                                    <CardContent
                                        style={{ textAlign: "center" }}
                                    >
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

                    <div style={{ marginTop: "2rem", textAlign: "center" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                setCurrentPage((prev) => Math.max(prev - 1, 1))
                            }
                            disabled={currentPage === 1}
                            style={{ marginRight: "1rem" }}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                setCurrentPage((prev) =>
                                    Math.min(prev + 1, totalPages)
                                )
                            }
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ marginTop: "1rem", textAlign: "center" }}
                    >
                        Page {currentPage} of {totalPages}
                    </Typography>
                </>
            )}
        </Container>
    );
};

export default PokemonList;
