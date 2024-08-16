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

    // Fetching paginated data or search results
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let fetchedPokemonDetails: Pokemon[] = [];

                if (searchTerm) {
                    // Fetch all Pokémon for searching
                    const data = await getPokemonList(1000, 0);
                    const filtered = data.results.filter(
                        (p: { name: string }) =>
                            p.name
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                    );

                    fetchedPokemonDetails = await Promise.all(
                        filtered.map(async (p: { name: string }) => {
                            const details = await getPokemonDetails(p.name);
                            return {
                                name: p.name,
                                sprite: details?.sprites?.front_default ?? "",
                                types:
                                    details?.types.map(
                                        (t: any) => t.type.name
                                    ) ?? [],
                            };
                        })
                    );

                    setTotalPages(1); // Single page for search results
                    setCurrentPage(1); // Reset to page 1 for search results
                } else {
                    // Paginated fetch when no search term is provided
                    const offset = (currentPage - 1) * pageSize;
                    const data = await getPokemonList(pageSize, offset);

                    fetchedPokemonDetails = await Promise.all(
                        data.results.map(async (p: { name: string }) => {
                            const details = await getPokemonDetails(p.name);
                            return {
                                name: p.name,
                                sprite: details?.sprites?.front_default ?? "",
                                types:
                                    details?.types.map(
                                        (t: any) => t.type.name
                                    ) ?? [],
                            };
                        })
                    );

                    setTotalPages(Math.ceil(data.count / pageSize)); // Calculate total pages based on API count
                }

                setPokemon(fetchedPokemonDetails);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [searchTerm, currentPage]);

    return {
        pokemon,
        searchTerm,
        setSearchTerm,
        loading,
        currentPage,
        setCurrentPage,
        totalPages,
    };
};

export default usePokemon;
