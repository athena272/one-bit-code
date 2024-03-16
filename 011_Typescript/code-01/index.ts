const spaceShip = {
    name: 'X-Wing',
    speed: 140,
}

function accelerateTeste(spaceShip: { name: string; speed: number }, speed: number) {
    spaceShip.speed += speed
}

accelerateTeste(spaceShip, 40)
accelerateTeste(spaceShip, 40)

console.log(spaceShip)