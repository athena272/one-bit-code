// A função que é enviada como parâmetro de uma HOF é chamada de callback
//Nesse caso, printer é um callback, pois printerSpee tem outro nome(printer)
function doubleSpeed(velocity, printer) 
{
  console.log("Entrei em doubleSpeed");
  let newVelocity = velocity * 2;
  printer(newVelocity);
  return newVelocity;
}

let printerSpeed = (velocity) => 
{
  console.log(`Nova velocidade: ${velocity}`);
}

let newVelocity = doubleSpeed(60, printerSpeed);