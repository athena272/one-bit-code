let spaceShip = prompt("informe o nome da nave");
let entrarDobra = prompt("Deseja entrar em dobra espacial?\n[1] - Sim\n[2] - Não");
let qtdDobras = 0;

while(entrarDobra == '1')
{
  qtdDobras += 1;
  entrarDobra = prompt("Deseja realizar a próxima dobra?\n[1] - Sim\n[2] - Não");
} 
alert(`Nave: ${spaceShip}\nQuantidade de dobras: ${qtdDobras}`);