import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Conhecendo o useEffect()</h1>
      <Counter position={1} />
      <br />
      <hr />
      <br />
      <button
        onClick={() => setCount2(count => count + 1)}
      >
        2º Contador: {count2}
      </button>
    </>
  )
}

export default App
