const spaceShip = {
    name: 'X-Wing',
    speed: 140,
}

function accelerate(spaceShip: { name: string; speed: number }, speed: number) {
    spaceShip.speed += speed
}

accelerate(spaceShip, 40)
accelerate(spaceShip, 40)

console.log(spaceShip)