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