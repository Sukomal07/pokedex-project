import { useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import PokemonDetails from '../PokemonDetails/PokemonDetails'
import Search from "../Search/Search"
function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="pokedex-container">
            <Search text={setSearchTerm} />
            {(!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokedex