class Spaceship {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  speedUp(acceleration) {
    this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate));
  }
  static get decelerationRate() {
    return 0.15;
  }
}

let spaceship = new Spaceship("Athena")

spaceship.speedUp(100);

console.log(spaceship)