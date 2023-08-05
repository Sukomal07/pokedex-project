import './styles/App.css'
import Pokedex from './components/Pokedex/Pokedex'
import { Link, Route, Routes } from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'
function App() {
  return (
    <>
      <Link to={'/'} className='title'>
        <h1 className="title">Pokedex</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App