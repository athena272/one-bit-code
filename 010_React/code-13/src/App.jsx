import { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Conhecendo o useEffect()</h1>
      <div>
        <label htmlFor='show'> Exibir</label>
        <input style={{ width: '20px', height: '20px', marginLeft: '10px', marginBottom: '0' }}
          id='show'
          type="checkbox"
          value={show}
          onChange={() => setShow(currentShow => !currentShow)}
        />
      </div>
      <br />
      <hr />
      <br />
      <Counter position={1} />
    </>
  )
}

export default App
