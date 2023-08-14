import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function PokemonDetails({ pokemonName }) {
    const [pokemon, setPokemon] = useState([])
    const { id } = useParams()
    async function fetchData() {
        try {
            let response
            if (pokemonName) {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            } else {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            }
            setPokemon({
                name: response.data.name,
                image: response.data.sprites.other.dream_world.front_default,
                weight: response.data.weight,
                height: response.data.height,
                types: response.data.types.map((t) => t.type.name)
            })
        } catch (error) {
            console.log("Something went wrong");
        }
    }

    useEffect(() => {
        fetchData()
    }, [pokemonName])
    return (
        <>
            <div className="pokemon-details">
                <div className="left">
                    <h1 className="pokemon-name">{pokemon.name}</h1>
                    <span className="details">Weight : {pokemon.weight}</span>
                    <span className="details">Height : {pokemon.height}</span>
                    <span className="types">
                        <ul className="type-list">
                            {pokemon.types && pokemon.types.map((t, idx) => <li key={idx}>{t}</li>)}
                        </ul>
                    </span>
                </div>
                <div className="right">
                    <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
                </div>
            </div>
        </>
    )
}

export default PokemonDetails