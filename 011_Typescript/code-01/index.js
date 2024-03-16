var spaceShip = {
    name: 'X-Wing',
    speed: 140,
};
function accelerate(spaceShip, speed) {
    spaceShip.speed += speed;
}
accelerate(spaceShip, 40);
accelerate(spaceShip, 40);
console.log(spaceShip);
