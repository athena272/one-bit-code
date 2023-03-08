let spaceShip = prompt("Informe o nome da nave");
let spaceShipVelocity = 0;
let chosenOption;

function showMenu() 
{
  let option;
  do 
  {
    option = prompt("O que deseja fazer?\n" +
                      "[1] - Acelerar a nave em 5km/s\n" +
                      "[2] - Desacelerar a nave em 5km/s\n" +
                      "[3] - Imprimir dados de bordo\n" +
                      "[4] - Sair de programa");
    
  } while (Number(option) < 1 && Number(option) > 4)
  return option;
}
function speedUp(velocity) 
{
  let newVelocity = velocity + 5;
  return newVelocity;
}
function slowDown(velocity) 
{
  let newVelocity = velocity - 5;
  if(newVelocity < 0) 
  {
    newVelocity = 0;
  }
  return newVelocity;
}
function printspaceShipBoardData(name, velocity) 
{
  alert(`Espaçonave ${name}\nVelocidade: ${velocity}km/s`);
}
do 
{
  chosenOption = showMenu()
  switch(chosenOption) 
  {
    case "1":
      spaceShipVelocity = speedUp(spaceShipVelocity);
      break;
    case "2":
      spaceShipVelocity = slowDown(spaceShipVelocity);
      break;
    case "3":
      printspaceShipBoardData(spaceShip, spaceShipVelocity);
      break;
    default:
      alert("Encerrando programa de bordo");
  }
} while(chosenOption != "4")