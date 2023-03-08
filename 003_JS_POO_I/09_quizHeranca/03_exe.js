class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name

    this.maxCrew = maxCrew

    this.maxRecommendedVelocity = maxRecommendedVelocity

    this.velocity = 0
  }

  calculateVelocity(acceleration) {
    this.velocity + acceleration
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    super(name, maxCrew, maxRecommendedVelocity)
  }

  speedUp(acceleration) {
    this.velocity = this.calculateVelocity(acceleration)
  }

  calculateVelocity(acceleration) {
    let newVelocity = super.calculateVelocity(acceleration / 2)

    return newVelocity
  }
}
