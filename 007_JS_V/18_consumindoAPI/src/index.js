import { transactions, fetchTransactions, updateBalance, saveTransaction } from "./transactions.js"
import { renderTransaction } from "./createTags.js";

export async function setup() {
    const results = await fetchTransactions()
    transactions.push(...results)
    transactions.forEach(transaction => renderTransaction(transaction))
    updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector("form").addEventListener('submit', saveTransaction)