export default function copyBtn (ev) {
  const button = ev.currentTarget
  const resultInput = document.querySelector('#result')
  
  if (button.innerText === 'Copy') {
    button.innerText = "Copied!"
    button.classList.add('success')
    window.navigator.clipboard.writeText(resultInput.value) 
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}