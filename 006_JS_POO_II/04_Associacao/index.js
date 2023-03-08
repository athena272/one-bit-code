const Address = require('./Address')
const Person = require('./Person')

const addr = new Address({
    street: '7 de Setembro',
    number: 92,
    neighborhood: 'Centro',
    city: 'São Fidélis',
    state: 'RJ'
})

const john = new Person({
    name: 'John',
    address: addr,
})

console.log(john)
console.log(john['name'])
console.log(john.address.fullAddress())