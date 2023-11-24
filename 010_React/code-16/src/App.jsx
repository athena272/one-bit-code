import './App.css'
import Header from './components/Header/Header'
import UserInfo from './components/UserInfo/UserInfo'
import UserContext from './context/UserContext';

const App = () => {
  const user = {
    name: 'João',
    email: 'joao@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <Header />
        <h1>Aplicação</h1>
        <UserInfo />
      </div>
    </UserContext.Provider>
  )
}

export default App
