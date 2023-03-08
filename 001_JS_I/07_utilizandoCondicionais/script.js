// Captura de dados
let namePiloto = prompt("Informe o nome do piloto");
let velocity = 0;
let currentVelocity = prompt("A que velocidade deseja viajar?");
let confirmVelocity = confirm(`Iremos viajar à ${currentVelocity} km/s`);
//Condicionais
if (confirmVelocity) 
{
  velocity = currentVelocity;
}
if(velocity <= 0) 
{
  alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) 
{
  alert("Você está devagar. Podemos aumentar mais.")
} else if(velocity < 80) 
{
  alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) 
{
  alert("Velocidade alta. Considere diminuir")
} else 
{
  alert("Velocidade perigosa. Controle automático forçado.")
}
// Mensagem final sobre o status
alert(`Piloto: ${namePiloto}\nVelocidade: ${velocity} km/s`);
