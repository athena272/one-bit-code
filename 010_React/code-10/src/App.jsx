import { useState } from 'react'
import Input from './components/Input/Input'
import './App.css'

const App = () => {
  const [password, setPassword] = useState("Sua senha aqui!")
  const [passwordSize, setPasswordSize] = useState(12)
  const [copyText, setCopyText] = useState("Copiar")

  function generatePassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
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
        <Input passwordSize={passwordSize > 50 ? setPasswordSize(50) : passwordSize} setPasswordSize={setPasswordSize} />
      </div>
      <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </>
  )
}

export default App
