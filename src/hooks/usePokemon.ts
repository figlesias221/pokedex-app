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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const pageSize = 20; // Number of Pokémon per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const offset = (currentPage - 1) * pageSize;
                const data = await getPokemonList(pageSize, offset);

                const pokemonDetails = await Promise.all(
                    data.results.map(
                        async (p: { name: string; url: string }) => {
                            const details = await getPokemonDetails(p.name);
                            return {
                                name: p.name,
                                sprite: details?.sprites?.front_default ?? "",
                                types:
                                    details?.types.map(
                                        (t: any) => t.type.name
                                    ) ?? [],
                            };
                        }
                    )
                );

                setPokemon(pokemonDetails);
                setTotalPages(Math.ceil(data.count / pageSize)); // Set total pages based on total count
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const filteredPokemon = pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        pokemon: filteredPokemon,
        searchTerm,
        setSearchTerm,
        loading,
        currentPage,
        setCurrentPage,
        totalPages,
    };
};

export default usePokemon;
