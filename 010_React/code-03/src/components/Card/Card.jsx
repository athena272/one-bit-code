import './Card.css'
import PropTypes from 'prop-types';

const Card = ({ title, imgPoster }) => (
    <div className="container">
        <img className="poster" src={imgPoster} alt="Star Wars poster" />
        <div>
            <h2 className="title">{title}</h2>

            <p className="description">Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
            <button className="button">Comprar agora</button>
        </div>
    </div>
)

Card.propTypes = {
    title: PropTypes.string,
    imgPoster: PropTypes.string
}

export default Card

