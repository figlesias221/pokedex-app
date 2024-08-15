import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails } from "../services/api";

interface Pokemon {
    name: string;
    sprite: string;
    types: string[];
}

const usePokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemonList();
            const pokemonDetails = await Promise.all(
                data.results.map(async (p: { name: string; url: string }) => {
                    const details = await getPokemonDetails(p.name);
                    return {
                        name: p.name,
                        sprite: details?.sprites?.front_default ?? "",
                    };
                })
            );
            setPokemon(pokemonDetails);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        pokemon: filteredPokemon,
        searchTerm,
        setSearchTerm,
        loading,
    };
};

export default usePokemon;
