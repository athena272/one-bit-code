import { Link, useParams } from "react-router-dom"
import products from '../../database.json'

const Product = () => {
    const { productId } = useParams()

    const product = products.find(product => product.id === +productId)

    return (
        <section>
            <Link to="/products">
                <button>Voltar</button>
            </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Comprar</button>
        </section>
    )
}
export default Product