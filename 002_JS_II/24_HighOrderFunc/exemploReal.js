// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]
// Forma tradicional
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista)
}
// Forma funcional
lista.forEach(exibirElemento)
// Também poderia ser feito:
// lista.forEach(function (elemento, indice, array) {
//   console.log({
//     elemento,
//     indice,
//     array
//   })
// })