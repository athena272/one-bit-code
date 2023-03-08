class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name;
    this.maxCrew = maxCrew;
    this.maxRecommendedVelocity = maxRecommendedVelocity;
    this.currentVelocity = 0;
  }
  speedUp(acceleration) {
    this.currentVelocity += acceleration;
    if(this.currentVelocity > this.maxRecommendedVelocity) {
      console.warn("VELOCIDADE MAXIMA ULTRAPASSADA\nPor favor, diminua!!!\n");
    }
  }
}

class BattleSpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("🔥Recolhendo armas e cessando fogo🔥\n");
  }
}

class DiscoverySpaceship extends Spaceship {
  stop() {
    this.currentVelocity = 0;
    console.log("🔍Parando a exploração e a pesquisa no planeta🔎\n");
  }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200);
let fenix = new BattleSpaceship("Fenix", 8, 240);

darwin.speedUp(220);
fenix.speedUp(230);

darwin.stop();
fenix.stop();

console.log(darwin);
console.log(fenix);