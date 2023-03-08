export class Account {
    #balance    
    // #deposits
    // #loans
    // #transfers

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = [ ]
    }

    get getBalance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance =+ loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.fromUser.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.toUser.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
            
        }
    }
}