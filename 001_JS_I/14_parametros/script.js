function speedUp(velocity, acceleration) {
  let newVelocity = velocity + acceleration;
  return newVelocity;
}

let num1 = Number(prompt("Digite a 1ª velocidade"));
let num2 = Number(prompt("Digite a 2ª velocidade "));

velocity = speedUp(num1, num2);
alert(`A nova aceleração é de ${velocity}`);