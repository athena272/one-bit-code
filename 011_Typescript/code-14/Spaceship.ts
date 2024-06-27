class Spaceship {
    name: string
    captain: string
    speed: number

    constructor({ name, captain }: { name: string, captain: string }) {
        this.name = name
        this.captain = captain
        this.speed = 0
    }

    accelerate({ rate, time }: { rate: number, time: number }) {
        this.speed = rate * time
    }
}

class Fighter extends Spaceship {
    weapons: number
    // O atributo weapons existe mesmo sem um construtor

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!')
        }
    }

    erase() {
        this.name = ''
        this.captain = ''
    }
}

let ship = new Spaceship({
    name: "USS Enterprise",
    captain: "James T. Kirk"
})