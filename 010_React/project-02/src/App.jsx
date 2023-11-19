// import './App.css'
import { useState } from "react"

const App = () => {
  
  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form>
        <label htmlFor="author">Email</label>
        <input type="text" id="author" required />
        <label htmlFor="content">Comentário</label>
        <textarea id="content" cols="30" rows="6" required></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />
      <section id="comments">
        <div>
          <h3>autor@email.com</h3>
          <span>Em 01/01/2001</span>
          <p>Comentário de exemplo</p>
        </div>
      </section>
    </div>
  )
}
export default App