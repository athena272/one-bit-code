// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
  console.log(num)
  if (num % 2 === 0) {
    dividir(num / 2)
  } else {
    return num
  }
}
dividir(18)

// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num) {
  console.log(`num = ${num}`)
  if (num == 0 || num == 1) {
    return 1
  }

  console.log(`${num} * ! ${num -1}`)
  return num * fatorial(num - 1)
}

// console.log("\n!5 = " + fatorial(5))
// console.log("\n!0 = " + fatorial(0))
console.log("\n!9 = " + fatorial(9))