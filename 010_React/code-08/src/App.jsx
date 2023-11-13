import './App.css'
import { useAdd, useSub } from './components/UseCounter/UserCounter'

const App = () => {
  const [add, setAdd] = useAdd()
  const [sub, setSub] = useSub()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={setAdd}>
          Add count, now is {add}
        </button>

        <button onClick={setSub}>
          Sub count, now is {sub}
        </button>
      </div>
    </>
  )
}

export default App
