class HitchPlatform {
  constructor(maxWeight) {
    this.maxWeight = maxWeight
  }
}

class SmallSpaceshipPlatform extends HitchPlatform {
  constructor(maxWidth) {
    super()

    this.maxWidth = maxWidth
  }
}

let smallPlatform = new SmallSpaceshipPlatform(10.3)

console.log(smallPlatform)
