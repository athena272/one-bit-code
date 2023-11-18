import { useState } from 'react'
import Input from './components/Input/Input'
import Checkbox from './components/Checkbox/Checkbox'
import './App.css'

const App = () => {
  const [password, setPassword] = useState("Sua senha aqui!")
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  const [copyText, setCopyText] = useState("Copiar")

  const passwordSize = showInput ? customSize : 12

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
      <Checkbox showInput={showInput} setShowInput={setShowInput} />
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input passwordSize={customSize > 50 ? setCustomSize(50) : customSize} setPasswordSize={setCustomSize} />
        </div>
      )}
      <button onClick={generatePassword}>Gerar senha de {passwordSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </>
  )
}

export default App
