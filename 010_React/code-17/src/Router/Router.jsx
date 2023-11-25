import { createBrowserRouter } from 'react-router-dom'
import Admin from '../components/Admin/Admin'
import Cart from '../components/Cart/Cart'
import Home from '../components/Home/Home'
import Product from '../components/Products/Products'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/admin",
        element: <Admin />,
    }
]) 