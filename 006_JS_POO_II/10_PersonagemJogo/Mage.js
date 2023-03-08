const Character = require("./Character");

class Mage extends Character {
    constructor({ name, lifePts, attackPts, defensePts, magicPts }) {
        super({ name: name, lifePts: lifePts, attackPts: attackPts, defensePts: defensePts })
        this.magicPts = magicPts
    }

    attack(targetCharacter) {
        targetCharacter.lifePts -= (this.magicPts + this.attackPts) - targetCharacter.defensePts
    }

    heal(targetCharacter) {
        targetCharacter.lifePts += this.magicPts * 2
    }
}

module.exports = Mage