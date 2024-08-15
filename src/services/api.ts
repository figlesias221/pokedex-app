import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemonList = async (
    limit: number = 1000,
    offset: number = 0
) => {
    const response = await axios.get(`${API_URL}/pokemon`, {
        params: { limit, offset },
    });
    return response.data;
};

export const getPokemonDetails = async (name: string) => {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
};
