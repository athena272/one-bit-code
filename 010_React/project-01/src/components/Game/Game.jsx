import PropTypes from "prop-types"

const Game = ({ id, title, cover, onRemove }) => (
    <div id={`game-${id}`}>
        <img src={cover} alt="Capa do jogo" />
        <div>
            <h2>{title}</h2>
            <button onClick={onRemove}>
                Remover
            </button>
        </div>
    </div>
)

Game.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
    onRemove: PropTypes.func
}

export default Game