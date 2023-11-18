import PropTypes from "prop-types"
import './GameItem.css'

const GameItem = ({ game }) => (
    <div id={`game-${game.id}`}>
        <img
            src={game.coverImage}
            alt={game.title}
        />
        <h2>{game.title} ({game.releaseYear})</h2>
        <p>{game.description}</p>
    </div>
)

GameItem.propTypes = {
    game: PropTypes.object.isRequired,
}

export default GameItem