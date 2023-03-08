import { Account } from "./entities/Account.js"
import { Deposit } from "./entities/Deposit.js"
import { Installment } from "./entities/Installment.js"
import { Loan } from "./entities/Loan.js"
import { User } from "./entities/User.js"
import { Transfer } from "./entities/Transfer.js"

export class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser({ email, fullName }) {
        const userExists = App.findUser(email)
        if (!userExists) {
            this.#users.push(new User({
                email: email,
                fullName: fullName
            }))
        }
    }

    static deposit({ email, value }) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static transfer({ fromUserEmail, toUserEmail, value }) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer({
                fromUser: fromUser,
                toUser: toUser,
                value: value
            })

            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static loan({ email, value, numberOfInstallments }) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan({
                value: value,
                installments: numberOfInstallments
            })
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newPercentage) {
        Loan.setFee = newPercentage
    }
}
