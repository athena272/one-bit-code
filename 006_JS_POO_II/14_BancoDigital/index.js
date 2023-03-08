import { App } from './App.js'

App.createUser({
    email: "isaac@email.com",
    fullName: "Issac Pontes"
})

App.createUser({
    email: "lucas@email.com",
    fullName: "Lucas Pontes",
})

App.createUser({
    email: "juliana@email.com",
    fullName: "Juliana Conde"
})

App.deposit({
    email: "isaac@email.com",
    value: 100 
})

App.transfer({
    fromUserEmail: "isaac@email.com",
    toUserEmail: "lucas@email.com",
    value: 20
})

App.changeLoanFee(10)
App.loan({
    email: "juliana@email.com",
    value: 2000,
    numberOfInstallments: 24
})

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)