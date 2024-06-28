class Spaceship {
    // Modificamos a propriedade para não haver conflito com os
    // accessors já que _name nunca vai ser usado fora da classe
    _name;
    captain;
    speed;
    constructor({ name, captain }) {
        this._name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate({ rate, time }) {
        this.speed = rate * time;
    }
    // accessor get
    get name() {
        return this._name;
    }
    // accessor set
    set name(name) {
        this._name = name;
    }
}
class Fighter extends Spaceship {
    weapons;
    // O atributo weapons existe mesmo sem um construtor
    constructor({ name, captain, weapons }) {
        super({ name, captain });
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!');
        }
    }
    erase() {
        this.name = '';
        this.captain = '';
    }
}
let ship = new Spaceship({
    name: "USS Enterprise",
    captain: "James T. Kirk"
});
let xWing = new Fighter({
    name: "X-wing",
    captain: "Luke Skywalker",
    weapons: 4
});
ship.accelerate({ rate: 2, time: 16 });
console.log("🚀 ~ ship.accelerate:", ship);
xWing.accelerate({ rate: 6, time: 20 });
console.log("🚀 ~ xWing:", xWing);
