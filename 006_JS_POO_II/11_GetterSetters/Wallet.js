class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100
    }

    get getAmount() {
        return this.#amount / 100
    }

    get getUsername() {
        return this.#username
    }

    set setUsername(username) {
        if (typeof username === 'string') {
            this.#username = username
        } else {
            console.error('username must be a string')
        }
    }

}

const myWallet = new Wallet()

console.log(myWallet.getAmount)

myWallet.setUsername = 'Pedra'
console.log(myWallet.getUsername)

myWallet.setUsername = myWallet.getUsername + ' Verde'
console.log(myWallet.getUsername)

myWallet.setUsername = 42
console.log(myWallet.getUsername)