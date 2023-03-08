class SpaceShip {
  constructor(name) {
    this.name = name;
    this.velocity = 0;
  }

  speedUp(aceleration) {
    this.velocity += aceleration;
  }
}

let athena = new SpaceShip("Athena");

athena.speedUp(10);
athena.speedUp(15);

console.log(athena);