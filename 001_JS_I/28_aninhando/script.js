let spaceShips = [
  {name: "Nave 01", crewQuantity: 18},
  {name: "Nave 02", crewQuantity: 28},
  {name: "Nave 03", crewQuantity: 38},
];

spaceShips.forEach(currentSpaceShip => { 
  console.log(`${currentSpaceShip.name} têm ${currentSpaceShip.crewQuantity} tripulantes`);
});