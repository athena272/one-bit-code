import { useState, useRef } from 'react'
import RefExample from './components/RefExample/RefExample'
import './App.css'

const App = () => {
  let variable = 0
  const ref = useRef(0)
  const [state, setState] = useState(0)

  const showValues = () => alert(`
    Variável: ${variable}
    Ref: ${ref.current}
    State: ${state}
  `)

  return (
    <div>
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <div className='buttons'>
        <button onClick={() => variable++}>Aumentar Variável</button>
        <button onClick={() => ref.current++}>Aumentar Ref</button>
        <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
        <button onClick={showValues}>Exibir valores</button>
      </div>
      <hr />
      <RefExample />
    </div>
  )
}

export default App
