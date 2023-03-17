import { renderTransaction } from "./createTags.js"

// Cria uma lista vazia transações.
export let transactions = []

// Função assíncrona para fazer uma requisição GET das transações.
export async function fetchTransactions() {
    return await fetch('http://localhost:3000/transactions/').then(res => res.json())
}

// Função para atualizar o saldo e exibi-lo na página.
export function updateBalance() {
    // Seleciona o elemento HTML onde o saldo deve ser exibido.
    const balanceSpan = document.querySelector('#balance')

    // Calcula o saldo como a soma das quantias das transações.
    const balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)

    // Formata o saldo em formato de moeda brasileira.
    const formater = Intl.NumberFormat('pt-BR', {
        compactDisplay: 'long',
        currency: 'BRL',
        style: 'currency',
    })

    // Exibe o saldo formatado no elemento HTML selecionado.
    balanceSpan.textContent = formater.format(balance)
}

// Função assíncrona para salvar uma transação na API.
export async function saveTransaction(ev) {
    ev.preventDefault()

    // Obtém os valores do formulário.
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

        // Obtém a transação atualizada da resposta da API.
        const transaction = await response.json()
        // Remove a transação antiga da lista de transações e insere a nova no mesmo índice.
        const indexToRemove = transactions.findIndex((transactionToFind) => transactionToFind.id === id)
        // atualizar um a um ou usar splice
        transactions.splice(indexToRemove, 1, transaction)
        // Remove a transação antiga da página e renderiza a nova.
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

        // Obtém a nova transação da resposta da API.
        const transaction = await response.json()
        // Adiciona a nova transação à lista de transações.
        transactions.push(transaction)
        // Renderiza a nova transação na página.
        renderTransaction(transaction)

    }

    //Reseta os campos
    document.querySelector("#id").value = null
    ev.target.reset()
    //Atualiza o saldo total 
    updateBalance()
}

