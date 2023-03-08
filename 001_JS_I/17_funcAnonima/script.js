console.log(speedUp(60, 10));
console.log(doubleSpeed(50));

// Dar erro
let doubleSpeed = function (velocity) 
{
  return velocity * 2;
}

// Ele é lida pelo compilador antes de tudo
function speedUp(velocity, aceleration)
{
  return velocity + aceleration;
}