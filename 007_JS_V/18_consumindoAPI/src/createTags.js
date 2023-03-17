import { transactions, updateBalance } from "./transactions.js"

function createTransactionContainer(id) {
    const container = document.createElement('div')
    container.classList.add('transaction')
    container.id = `transaction-${id}`
    return container
}

function createTransactionTitle(name) {
    const title = document.createElement('span')
    title.classList.add('transaction-title')
    title.textContent = name
    return title
}

function createTransactionAmount(amount) {
    const span = document.createElement('span')
    span.classList.add('transaction-amount')
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })

    const formatedAmount = formater.format(amount)

    if (amount > 0) {
        span.textContent = `${formatedAmount} C`
        span.classList.add('credit')
    } else {
        span.textContent = `${formatedAmount} D`
        span.classList.add('debit')
    }

    return span
}

function createEditTransactionBtn(transaction) {
    const btnEdit = document.createElement('button')
    btnEdit.classList.add('edit-btn')
    btnEdit.textContent = 'Editar'

    btnEdit.addEventListener('click', () => {
        document.querySelector("#id").value = transaction.id
        document.querySelector("#name").value = transaction.name
        document.querySelector("#amount").value = transaction.amount
    })

    return btnEdit
}

function createDeleteTransactionButton(id) {
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('delete-btn')
    btnDelete.textContent = 'Excluir'

    btnDelete.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })

        btnDelete.parentElement.remove()
        const indexToRemove = transactions.findIndex((transactionToFind) => transactionToFind.id === id)
        transactions.splice(indexToRemove, 1)
        updateBalance()
    })

    return btnDelete
}

export function renderTransaction(transaction) {
    const container = createTransactionContainer(transaction.id)
    const title = createTransactionTitle(transaction.name)
    const amount = createTransactionAmount(transaction.amount)
    const btnEdit = createEditTransactionBtn(transaction)
    const btnDelete = createDeleteTransactionButton(transaction.id)

    container.append(title, amount, btnEdit, btnDelete)
    document.querySelector('#transactions').append(container)
}

