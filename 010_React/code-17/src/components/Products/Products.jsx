import { Link } from 'react-router-dom'
import products from '../../database.json'

const Product = () => (

    <section>
        <header>
            <nav style={{ display: "flex", gap: "2rem" }}>
                <Link to="/products">Produtos</Link>
                <Link to="/cart">Carrinho</Link>
            </nav>
        </header>
        <h2>Todos os produtos</h2>
        <p>Confira todas as nossas ofertas.</p>
        <section className="products">
            <h3>Processadores</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h4>{product.name}</h4>
                        <p>R$ {product.price}</p>
                        <button>Ver</button>
                        <button>Compras</button>
                    </li>
                ))}
            </ul>
        </section>
    </section>
)

export default Product