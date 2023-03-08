function normalSum (a, b) {
  return a + b
}

const anonymousSum = function (a, b) {
  return a + b
}

// const arrowSum = (a, b) => {
//   return a + b
// }
const arrowSum = (a, b) => a + b

const double = num => `O dobro de ${num} eh ${num * 2}`

console.log(double(7))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0].toUpperCase() === 'P')
console.log(startingWithP)