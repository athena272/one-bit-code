var spaceShip = {
    name: 'X-Wing',
    speed: 140,
};
function accelerateTeste(spaceShip, speed) {
    spaceShip.speed += speed;
}
accelerateTeste(spaceShip, 40);
accelerateTeste(spaceShip, 40);
console.log(spaceShip);
