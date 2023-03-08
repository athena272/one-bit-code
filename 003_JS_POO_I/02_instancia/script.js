class SpacialStation {
  constructor(name, platformsQuantity) {
    this.name = name;
    this.platformsQuantity = platformsQuantity;
  }
}

class SpaceShip {
  constructor(nameSpaceShip, type = "Tita") {
    this.name = nameSpaceShip;
    this.type = type;
  }
}

let observatory = new SpacialStation("Observatorio", 5);

let darwinSpaceShip = new SpaceShip("Darwin");
let helmetSpaceShip = new SpaceShip("Helmet", "Batalha");

console.log(observatory);
console.log(darwinSpaceShip);
console.log(helmetSpaceShip);