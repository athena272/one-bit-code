class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }
  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      console.warn("VELOCIDADE MAXIMA ULTRAPASSADA\nPor favor, diminua!!!\n");
    }
  }
}

class TransportSpaceship extends Spaceship {

  speedUp() {
    console.log("Naves de transporte so aumentam 1Km/s de cada vez")
    this.currentVelocity++;
  }
}
let transportSpaceship = new TransportSpaceship("Atlas", 4, 100);
transportSpaceship.speedUp(99);
console.log(transportSpaceship);