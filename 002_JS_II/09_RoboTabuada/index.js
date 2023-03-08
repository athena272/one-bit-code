const numero = parseFloat(prompt("De qual número você deseja calcular a tabuada?"))
let resultado = ""

for (let i = 1; i <= 10; i++) {
  resultado += " -> " + i + " x " + numero + " = " + (numero * i) + "\n"
}

alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)