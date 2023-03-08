function register(element) {
   const userName = element.children.username.value
   const password = element.children.password.value
   const passwordConfirmation = element.children.passwordConfirmation.value

   if(password == passwordConfirmation) {
      alert(`Usuário ${userName} autenticado(a)`)
   } else {
      alert("As senhas não conferem")
   }
}