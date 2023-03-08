let spaceShip = prompt("Informe o nome da nave");
let charToReplace = prompt("Qual caracter você deseja substituir?");
let replacementChar = prompt("Por qual caracter você deseja substituir?");
let newName = '';

for (let i = 0; i < spaceShip.length; i++) 
{
  if(spaceShip[i] == charToReplace)
  {
    newName += replacementChar;
  } else
  {
    newName += spaceShip[i];
  }
}

alert(`O novo nome da nave é ${newName}`)
