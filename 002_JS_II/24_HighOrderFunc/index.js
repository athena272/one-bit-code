// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a, b)
  return resultado
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
  console.log("Realizando soma.")
  return x + y
}
calcular(3, 5, somar)
console.log(somar)       // Retorna a própria função
console.log(somar(1, 1)) // Chama a função (retorna o resultado da função)

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
console.log(calcular(9, 2, function (x, y) {
  console.log("Realizando substração.")
  return x - y
}))

