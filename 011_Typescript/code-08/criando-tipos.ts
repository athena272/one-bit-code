// Literals são tipos representados por conteúdos específicos
// Variáveis const são automaticamente literals,
// mas variáveis let também podem ser tipadas como literals
let literal: "Hello, World!"
let pi: 3.14159

// Não é possível atribuir nenhum valor a um literal
// literal = "Hi, World!"  // produz erro
// pi = 3                  // produz erro

// Unions são tipos que unem diferentes possibilidades de tipos
// Eles são definidos usando o caracter pipe "|"
let option: string | number

option = 1     // válido
option = "1"   // válido
// option = false // produz erro

// Ao unirmos Unions com Literals temos um resultado muito interessante
let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

planet = "Terra"
// Com isso o autocompletar da IDE se torna ainda mais poderoso
if (planet === "Terra") {
    console.log("Estamos na Terra"); 
}