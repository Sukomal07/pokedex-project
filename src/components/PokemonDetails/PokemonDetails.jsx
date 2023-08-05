import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function PokemonDetails() {
    const [pokemon, setPokemon] = useState([])
    const { id } = useParams()
    async function fetchData() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(response.data);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        }
        )
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="pokemon-details">
                <h1 className="pokemon-name">{pokemon.name}</h1>
                <span className="details">Weight:{pokemon.weight}</span>
                <span className="details">Height:{pokemon.height}</span>
                <span className="details">Types
                    <ul>
                        {pokemon.types && pokemon.types.map((t, idx) => <li key={idx}>{t}</li>)}
                    </ul>
                </span>
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-img" />
            </div>
        </>
    )
}

export default PokemonDetails