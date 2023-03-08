let spaceShip = prompt("Informe o nome da nave");
let newSpaceShip = '';

for (let i = spaceShip.length - 1; i >= 0; i--) 
{
  if(spaceShip[i] == 'e') { break; }

  newSpaceShip += spaceShip[i];
}

alert(`Nome original da nave: ${spaceShip}\nNome após ocultação: ${newSpaceShip}`);
