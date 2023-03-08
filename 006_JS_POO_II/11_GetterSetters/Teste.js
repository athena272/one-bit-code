class Teste {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 
    }

    get getAmount() {
        return this.#amount / 100
    }

    get username() {
        return this.#username
    }

    set username(newUsername) {
        this.#username = newUsername
    }

}

const myTeste = new Teste()

console.log(myTeste.getAmount)

myTeste.username = 'Pedra'
console.log(myTeste.username)

myTeste.username += ' Verde'
console.log(myTeste.username)
