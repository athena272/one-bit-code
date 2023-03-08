class TransportSpaceship {
  constructor(name) {
    this.name = name;
    this.currentVelocity = 0;
  }
  set velocity(newVelocity) {
    if (newVelocity > 120) { 
      this.currentVelocity = 120;
    }
    else {
      this.currentVelocity = newVelocity;
    }
  }
}

let transportSpaceship = new TransportSpaceship("Atlas");

transportSpaceship.velocity = 130;

console.log(transportSpaceship);

