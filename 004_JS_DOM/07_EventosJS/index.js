function register(ev) {
  // console.log(ev)
  const sectionElement = ev.currentTarget.parentNode

  const userName = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if(password == passwordConfirmation) {
    alert(`Usuário ${userName} autenticado(a)`)
 } else {
    alert("As senhas não conferem")
 }
 
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
  button.removeEventListener('click', register)
  alert('Event removed')
}

button.addEventListener('mouseover', function(ev) {
  console.log(ev.currentTarget)
})