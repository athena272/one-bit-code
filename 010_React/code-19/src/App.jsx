import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'

const App = () => (
  <RouterProvider router={router} />
)

export default App