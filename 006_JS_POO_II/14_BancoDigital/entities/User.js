import { Account } from "./Account.js"

export class User {
    constructor({ email, fullName }) {
        this.email = email
        this.fullName = fullName
        this.account = new Account(this)
    }
}