import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
  const charKeyBtn = ev.currentTarget
  const value = charKeyBtn.dataset.value
  input.value += value
}

export function handleClearButton() {
  input.value = ''
  input.focus()
}

export function handleTyping(params) {
  ev.preventDefault()
  const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }

  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }

  if (ev.key === 'Enter') {
    calculate()
  }
}