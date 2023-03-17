import { renderTransaction } from "./createTags.js"

export let transactions = []

export async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions/').then(res => res.json())
}

export function updateBalance() {
    const balanceSpan = document.querySelector('#balance')
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })

    balanceSpan.textContent = formater.format(balance)
}

export async function saveTransaction(ev) {
    ev.preventDefault()

    const id = document.querySelector("#id").value
    const name = document.querySelector("#name").value
    const amount = parseFloat(document.querySelector("#amount").value)

    if (id) {
        // editar transação com o id informado
        const response = await fetch(`http://localhost:3000/transactions/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transaction = await response.json()
        const indexToRemove = transactions.findIndex((transactionToFind) => transactionToFind.id === id)
        // atualizar um a um ou usar splice
        transactions.splice(indexToRemove, 1, transaction)
        document.querySelector(`#transaction-${id}`).remove()
        renderTransaction(transaction)

    } else {
        //criar nova transação
        const response = await fetch('http://localhost:3000/transactions', {
            method: 'POST',
            body: JSON.stringify({ name, amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const transaction = await response.json()
        transactions.push(transaction)
        renderTransaction(transaction)

    }

    ev.target.reset()
    updateBalance()
}

