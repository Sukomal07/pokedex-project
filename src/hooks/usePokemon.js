import axios from "axios";
import { useEffect, useState } from "react";

function usePokemon() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        pokedexUrl: `https://pokeapi.co/api/v2/pokemon`,
        nextUrl: '',
        prevUrl: ''
    })

    async function fetchdata() {
        setPokemonListState({ ...pokemonListState, isLoading: true })
        const response = await axios.get(pokemonListState.pokedexUrl)
        setPokemonListState((state) => ({ ...state, nextUrl: response.data.next, prevUrl: response.data.previous }))
        const pokemonResult = response.data.results
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
        const pokemonData = await axios.all(pokemonResultPromise)
        const res = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default
            }
        })
        setPokemonListState((state) => ({ ...state, pokemonList: res, isLoading: false }))
    }
    useEffect(() => {
        fetchdata()
    }, [pokemonListState.pokedexUrl])

    return { pokemonListState, setPokemonListState }
}

export default usePokemon
