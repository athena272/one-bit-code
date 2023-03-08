import { Installment } from "./Installment.js"

export class Loan {
    static #fee = 1.05

    constructor({ value, installments }) {
        this.value = value
        this.installments = []
        for (let i = 1; i <= installments; i++) {
            this.installments.push(new Installment({
                value: (value * Loan.#fee) / installments,
                number: i
            }))
        }
        this.createdAt = new Date()
    }

    static get getFee() {
        return Loan.#fee
    }

    static set setFee(newFeePercentage) {
        Loan.#fee = 1 + (newFeePercentage / 100)
    }
}