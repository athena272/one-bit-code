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
      console.log("VELOCIDADE MAXIMA ULTRAPASSADA\nPor favor, diminua!!!\n");
    }
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity);
    this.maxLoadWeight = maxLoadWeight;
  }
  speedUp(acceleration) {
    acceleration = acceleration / 2;
    console.log(`Aumentando a velocidade em ${acceleration}Km/s`);
    super.speedUp(acceleration);
  }
}

let transportSpaceship = new TransportSpaceship("Atlas", 4, 100, 400);

transportSpaceship.speedUp(500);

console.log(transportSpaceship);