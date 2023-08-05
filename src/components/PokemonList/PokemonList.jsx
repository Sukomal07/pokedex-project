import { useEffect, useState } from "react"
import axios from 'axios'
import Pokemon from "../Pokemon/Pokemon"

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [pokedexUrl, setPokedexurl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [nextUrl, setNextUrl] = useState(``)
    const [prevUrl, setPrevUrl] = useState(``)
    async function fetchdata() {
        setLoading(true)
        const response = await axios.get(pokedexUrl)
        console.log(response);
        setNextUrl(response.data.next)
        setPrevUrl(response.data.previous)
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
        setPokemonList(res)
        setLoading(false)
    }
    useEffect(() => {
        fetchdata()
    }, [pokedexUrl])
    return (
        <>
            <div className="pokemon-list">
                {(isLoading) ? <><div className="loading"></div></> : <>
                    {pokemonList.map((data, idx) => <Pokemon key={idx} name={data.name} image={data.image} id={data.id} />)}
                </>}
            </div>
            <div className="buttons">
                <button disabled={prevUrl === null} onClick={() => setPokedexurl(prevUrl)}>prev</button>
                <button disabled={nextUrl === null} onClick={() => setPokedexurl(nextUrl)}>next</button>
            </div>
        </>
    )
}

export default PokemonList