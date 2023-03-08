class TransportSpaceship extends Spaceship {
  constructor(name, crewQuantity, sitsQuantity) {
    super(name, crewQuantity)
    this.sitsQuantity = sitsQuantity
  }
}

let transport = new TransportSpaceship("Atlas", 15, 15)
transport.speedUp(200)
console.log(transport)
