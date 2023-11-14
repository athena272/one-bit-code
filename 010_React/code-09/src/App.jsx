import { useState } from 'react'
import './App.css'

const App = () => {
  const [password, setPassword] = useState("Sua senha aqui!")
  const [passwordSize, setPasswordSize] = useState(12)
  const [copyText, setCopyText] = useState("Copiar")

  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return (
    <>
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <input type="number" id="passwordSize" min={1} max={50} value={passwordSize} onChange={(ev) => setPasswordSize(ev.target.value)} />
      </div>
      <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </>
  )
}

export default App
