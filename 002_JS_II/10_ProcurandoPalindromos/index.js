const palavra = prompt("Informe uma palavra:")
let palavraInvertida = ""

for (let letra = palavra.length - 1; letra >= 0; letra--) {
  palavraInvertida += palavra[letra]
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!")
} else {
  alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
}