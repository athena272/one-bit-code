import { transactions, updateBalance } from "./transactions.js"

// Função que cria o elemento HTML para o container de transação, recebendo um ID como parâmetro
function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

// Função que cria o elemento HTML para o título da transação, recebendo um nome como parâmetro
function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

// Função que cria o elemento HTML para o valor da transação, recebendo o valor da transação como parâmetro
function createTransactionAmount(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')

    // Cria um objeto formatador de valores, definindo a moeda, o estilo de exibição e outras configurações
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })

    // Formata o valor da transação usando o formatador criado acima
    const formatedAmount = formater.format(amount)

    // Adiciona o valor formatado ao elemento HTML e adiciona uma classe "credit" ou "debit" dependendo do sinal do valor
    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('transaction-amount', 'credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('transaction-amount', 'debit')
    }

    return span
}

// Função que cria o botão de edição de transação, recebendo a transação como parâmetro
function createEditTransactionBtn(transaction) {
    const btnEdit = document.createElement('button')
    btnEdit.classList.add('edit-btn')
    btnEdit.textContent = 'Editar'

    // Quando clica no botão de editar, os campos de valor e nome recebem os dados do item clicado
    // Visando vacilitar a edição
    btnEdit.addEventListener('click', () => {
        document.querySelector("#id").value = transaction.id
        document.querySelector("#name").value = transaction.name
        document.querySelector("#amount").value = transaction.amount
    })

    return btnEdit
}

// Função que cria o botão de exclusão de transação, recebendo o ID da transação como parâmetro
function createDeleteTransactionButton(id) {
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('delete-btn')
    btnDelete.textContent = 'Excluir'

    // Adiciona um evento de clique ao botão que faz uma requisição para excluir a transação do servidor
    // e remove o elemento HTML da transação da página, além de atualizar o saldo total
    btnDelete.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })

        btnDelete.parentElement.remove()
        const indexToRemove = transactions.findIndex((transactionToFind) => transactionToFind.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })

    return btnDelete
}

// Adiciona um evento de clique ao botão que preenche o formulário de edição com os dados da transação
export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const btnEdit = createEditTransactionBtn(transaction)
    const btnDelete = createDeleteTransactionButton(transaction.id)

    container.append(title, amount, btnEdit, btnDelete)
    document.querySelector('#transactions').append(container)
}

