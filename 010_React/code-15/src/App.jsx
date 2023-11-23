import './App.css'
import { useEffect, useState } from "react"

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results
}

function App() {
  const [pokemons, setPokemons] = useState([])
  const [url, setUrl] = useState(null)
  const [pokemonShown, setPokemonShown] = useState(null)

  useEffect(() => {
    fetchPokemon().then(result => {
      console.log("Requisição realizada")
      console.log(result)
      setPokemons(result)
    })
  }, [])

  useEffect(() => {
    if (url) {
      fetch(url).then(res => res.json()).then(data => {
        console.log("pokemon encontrado")
        console.log(data)
        setPokemonShown(data)
      })
    }
  }, [url])

  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemons.map(pokemon => (
            <li key={pokemon.name}>
              <span>{pokemon.name}</span>
              <button onClick={() => setUrl(pokemon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {pokemonShown && (
        <div>
          <h2>{pokemonShown.name}</h2>
          <img
            src={pokemonShown.sprites.front_default}
            alt=""
          />
          <div className="stat">
            <b>Tipo: </b>
            {pokemonShown.types.map(({ type }) => (
              <span key={type.name}>{type.name} </span>
            ))}
          </div>
          <div className="stat">
            <b>Altura: </b>{pokemonShown.height / 10} m
          </div>
          <div className="stat">
            <b>Peso: </b>{pokemonShown.weight / 10} Kg
          </div>
          <div className="stat">
            <b>Atributos</b>
            <ul>
              {pokemonShown.stats.map(({ base_stat, stat }) => (
                <li key={stat.name}>
                  {stat.name}: {base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat">
            <b>Habilidades</b>
            <ul>
              {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                <li key={ability.name}>
                  {ability.name}
                  {is_hidden && " (secreta)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div >
  )
}

export default App
