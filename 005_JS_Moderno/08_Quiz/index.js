let person = {
  name: "John Doe",
  email: "doejohn@email.com",
  birthay: "1990-03-14",
  age: 32
}
  
let x = 0
x = person.data?.age
console.log(x)

const f = (...args) => console.log(args[0], args[args.length - 1])
f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17)
f('Aleluia', 'Jesus', 'Cristo')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]  
const element = 42
const newArray = [...array, element]
console.log(newArray)