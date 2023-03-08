class Spaceship {
  constructor() {
    console.log('Nave espacial instanciada!')
  }
}

class BattleSpaceship {
  constructor() {
    this.spaceship = new Spaceship()

    console.log('Nave espacial de batalha instanciada!')
  }
}
