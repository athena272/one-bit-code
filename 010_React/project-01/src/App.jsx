import Game from "./components/Game/Game"
import GameForm from "./components/GameForm/GameForm"
import useGameCollection from "./hooks/useGameCollection"
import './App.css'

const App = () => {
  const { games, addGame, removeGame } = useGameCollection()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>
      <GameForm addGame={addGame} />
      <div className="games">
        {
          games.length > 0 ?
            games.map(game => (
              <Game
                key={game.id}
                id={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={() => removeGame(game.id)}
              />
            ))
            :
            <h2>Parece que nenhum não tem nada aqui :(, tente adicionar jogos</h2>
        }
      </div>
    </div>
  )
}

export default App