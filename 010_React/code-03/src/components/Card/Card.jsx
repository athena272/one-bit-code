import posterImg from '/assets/star-wars.jpg'
import './Card.css'

const Card = () => (
    <div className="container">
        <img className="poster" src={posterImg} alt="Star Wars poster" />
        <div>
            <h2 className="title">Pôster do filme Star Wars</h2>

            <p className="description">Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
            <button className="button">Comprar agora</button>
        </div>
    </div>
)

export default Card