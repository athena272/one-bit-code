import { createBrowserRouter } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import Cart from '../components/Cart/Cart'
import Home from '../components/Home/Home'
import Products from '../components/Products/Products'
import Product from '../components/Product/Product'
import Layout from '../pages/Layout/Layout'
import { loadProduct } from '../loaders/products'
import ProductBoundary from '../error-boundaries/ProductBoundary'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: "products",
            element: <Products />
        },
        {
            path: 'products/:productId',
            element: <Product />,
            loader: loadProduct,
            errorElement: <ProductBoundary />
        },
        {
            path: "cart",
            element: <Cart />
        }]
    },
    {
        path: "/admin",
        element: <Admin />
    }
])
export default router