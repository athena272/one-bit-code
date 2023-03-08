// Função para validar o email
function validateEmail(email) {
    // Expressão regular para validar o email
    const emailValid = email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/) ? true : false

    // Se o email não for válido, lança um erro
    if (!emailValid) {
        const err = new Error('Invalid email')
        err.input = 'email'
        throw err
    }
}

// Função para validar a senha
function validatePassword(password) {
    // Verifica se a senha atende aos requisitos mínimos
    if (
        password.length < 8 ||
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/\d/) ||
        !password.match(/[^a-zA-Z0-9\s]/)
    ) {
        const err = new Error('Invalid password')
        err.input = 'password'
        throw err
    }
}

// Função para redefinir os estilos do formulário
function resetFormStyles(inputs) {
    // Remove as classes 'success' e 'error' dos elementos do formulário
    Object.entries(inputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

// Objeto que mapeia os elementos do formulário
const userInputs = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
}

// Referência ao formulário
const form = document.querySelector('form')

// Listener de evento para o envio do formulário
form.addEventListener("submit", (ev) => {
    // Impede que a página seja atualizada
    ev.preventDefault()

    // Limpa os estilos aplicados anteriormente ao formulário
    resetFormStyles(userInputs)

    try {
        // Adiciona a classe 'success' ao campo do nome
        userInputs.name.classList.add('success')

        // Valida o email e adiciona a classe 'success' se for válido
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')

        // Valida a senha e adiciona a classe 'success' se for válida
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')

    } catch (err) {
        // Adiciona a classe 'error' ao campo correspondente e exibe a mensagem de erro
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})
