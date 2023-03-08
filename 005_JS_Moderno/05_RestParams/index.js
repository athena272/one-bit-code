// function sum (...numbers) {
//   return numbers.reduce(function (acumulador, number)  {
//     return acumulador + number
//   }, 0)
// }

function sum (...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)

}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))