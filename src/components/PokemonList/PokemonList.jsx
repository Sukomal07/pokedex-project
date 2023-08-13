import usePokemon from "../../hooks/usePokemon"
import Pokemon from "../Pokemon/Pokemon"

function PokemonList() {
    const { pokemonListState, setPokemonListState } = usePokemon()
    return (
        <>
            <div className="pokemon-list">
                {(pokemonListState.isLoading) ? <><div className="loading"></div></> : <>
                    {pokemonListState.pokemonList.map((data, idx) => <Pokemon key={idx} name={data.name} image={data.image} id={data.id} />)}
                </>}
            </div>
            <div className="buttons">
                <button disabled={pokemonListState.prevUrl === null} onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.prevUrl })}>prev</button>
                <button disabled={pokemonListState.nextUrl === null} onClick={() => setPokemonListState({ ...pokemonListState, pokedexUrl: pokemonListState.nextUrl })}>next</button>
            </div>
        </>
    )
}

export default PokemonList