import { games } from './data.js'
import GameItem from './components/GameItem/GameItem.jsx'
import './App.css'

const App = () => (
  <div className='app'>
    <h1>Meus Jogos</h1>
    <div className='gameList'>
      {games.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  </div>
)
export default App
