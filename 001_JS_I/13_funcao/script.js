//3 escopos: global, função e o bloco
// Aqui o codigo está no global
var serie = 'Friends '

if(true){
  // Aqui e bloco
  var serie2 = 'Game of Thrones na serie2'
  document.write(serie)
}

document.write(serie2)

document.write('<br />')

function x(){
  // Aqui e dentro da função
  var serie3 = 'The Walking Dead na serie3'
  document.write(serie)
  document.write(serie3)
}

x() //Chamando a função, para imprimir na tela

document.write('<br />')
document.write(serie3) //não renderiza