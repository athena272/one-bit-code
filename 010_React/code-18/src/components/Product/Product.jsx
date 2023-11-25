import { Link } from "react-router-dom"

const Product = () => (
    <section>
        <Link to="/products">
            <button>Voltar</button>
        </Link>
        <h2>nome do produto</h2>
        <p>descrição do produto</p>
        <p>R$ 00,00</p>
        <button>Comprar</button>
    </section>
)

export default Product