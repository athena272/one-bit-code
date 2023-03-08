const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage({
    name: 'Arthur',
    lifePts: 90,
    attackPts: 4,
    defensePts: 2,
    magicPts: 14,
})

const beatrice = new Thief({
    name: 'Beatrice',
    lifePts: 140,
    attackPts: 22,
    defensePts: 8,
})

const cain = new Warrior({
    name: 'Cain',
    lifePts: 200,
    attackPts: 14,
    defensePts: 12,
    shieldPts: 4,
})

console.table({ arthur, beatrice, cain })

cain.switchStance()
arthur.attack(cain)
beatrice.attack(arthur)

console.table({ arthur, beatrice, cain })

cain.switchStance()
cain.attack(arthur)
arthur.heal(arthur)
beatrice.attack(cain)

console.table({ arthur, beatrice, cain })

