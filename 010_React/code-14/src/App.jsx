import { useState, useEffect } from "react"
import './App.css'

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results
}

const App = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemon().then(result => {
      console.log("REQUISIÇÃo REALIZADA")
      console.log(result)
      setPokemons(result)
    })
  }, [])

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemons.map(pokemon => (
            <li key={pokemon.name}>
              <span>{pokemon.name}</span>
              <button>
                Ver detalhes
              </button>

            </li>
          ))}
        </ul>

        {JSON.stringify(pokemons)}
      </div>
    </div>
  )
}

export default App
