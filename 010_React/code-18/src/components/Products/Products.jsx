import { Link } from "react-router-dom"
import products from '../../database.json'

const Product = () => (

    <section>
        <h2>Todos os produtos</h2>
        <p>Confira todas as nossas ofertas.</p>
        <section className="products">
            <h3>Processadores</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h4>{product.name}</h4>
                        <p>R$ {product.price}</p>
                        <Link to={`/products/${product.id}`}>
                            <button style={{ marginRight: '10px' }}>Ver</button>
                        </Link>
                        <button>Compras</button>
                    </li>
                ))}
            </ul>
        </section>
    </section>
)

export default Product