const spaceShips = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmete", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

let spaceShipsCrew = spaceShips.filter((currentSpaceShip) => {
  return currentSpaceShip[1] > 9;
}).map(function (currentSpaceShip) {
  return currentSpaceShip[0];
});

let hitchPlatform = spaceShips.findIndex((spaceShip) => {
  return spaceShip[2] == false;
})

let arrayShipsUpper = spaceShips.map(function(currentSpaceShip) {
  let spaceShipUpper = currentSpaceShip[0].toUpperCase();
  return spaceShipUpper;
});

let message = "Espaçonaves com mais de 9 tripulantes: " + spaceShipsCrew.join(", ") 
message += "\nPlataformas com processo de engate: " + (hitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + arrayShipsUpper.join(", ");

alert(message);