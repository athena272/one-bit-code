function doubleSpeed(velocity, printer) 
{
  console.log("Entrei em doubleSpeed");
  let newVelocity = velocity * 2;
  printer(newVelocity);
  return newVelocity;
}

// let anotherHOF = doubleSpeed(75, (velocity) => {
//   console.log(`Nova velocidade: ${velocity}`);
// });

let anotherHOF = doubleSpeed(75, function (velocity) {
  console.log(`Nova velocidade: ${velocity}`);
});