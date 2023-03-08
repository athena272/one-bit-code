let spaceShip = {
  name: "Athena",
  type: "battleShip",
  maxCrew: 13,
  turnOn: function (ship) {
    alert(`Ligando o motor da nave ${this.name}`);
  }
};

spaceShip.velocity = 0
spaceShip.speedUp = function (acceleration) {
  this.velocity += acceleration;
};

spaceShip.speedUp(88);

console.log(spaceShip);

spaceShip.turnOn();

