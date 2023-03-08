let spaceShip = {
  velocity: 0,
  speedUp: function(aceleration) {
    this.velocity += aceleration;
  }
}

function registerSpaceShip() {
  spaceShip.name = prompt("Informe o nome da nave");
  spaceShip.type = prompt("Informe o tipo da nave");
  spaceShip.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"));
}

function acelerate() {
  let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"));
  spaceShip.speedUp(acceleration);
  if(spaceShip.velocity > spaceShip.maxVelocity) {
      alert(  `VELOCIDADE MÁXIMA ULTRAPASSADA!` +
              `\nVelocidade da Nave: ${spaceShip.velocity}km/s` +
              `\nVelocidade máxima da Nave: ${spaceShip.maxVelocity}km/s`);
  }
}

function stop() {
  alert(`Nome: ${spaceShip.name}` + 
  `\nTipo: ${spaceShip.type}` + 
  `\nVelocidade da nave: ${spaceShip.velocity}km/s` + 
  `\nMáxima da Nave: ${spaceShip.maxVelocity}km/s`);

  spaceShip.velocity = 0;
}

function showMenu() {
  let choseOption;
  do {
    choseOption = prompt("Você deseja:\n[1]- Acelerar\n[2]- Parar")
    switch (choseOption) {
      case "1":
        acelerate();
        break;
      
      case "2":
        stop();
        break;

      default:
        alert("Opção inválida");
        break;

    }
  } while (choseOption != "2")
}

// As primeiras duas funcoes que devem acontecer
registerSpaceShip();
showMenu();
