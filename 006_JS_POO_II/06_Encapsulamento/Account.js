class Account {
    #password
    #balance = -1

    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    getBalance({ email, password }) {
        if (this.#authenticate({ email: email, password: password })) {
            return this.#balance
        } else {
            return null
        }
    }

    #authenticate({ email, password }) {
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "guigo@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)


console.log(myAccount)
console.log(myAccount.getBalance({
    email: "guigo@gmail.com",
    password: "123456"
}))