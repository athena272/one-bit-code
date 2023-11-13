import './App.css'
import useValue from './components/UseCounter/UserCounter'

const App = () => {
  const [count, setCount] = useValue()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={setCount}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
