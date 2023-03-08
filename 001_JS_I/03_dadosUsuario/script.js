alert("Bem vindo! A seguir pediremos que informe alguns dados");

let nome = prompt("Qual seu nome?");
console.log(`name: ${nome}`);

let age = prompt("Informe seua idade");
console.log(`age: ${age}`);

let isAge = confirm(`Sua idade é de ${age} anos?`);
console.log(`isAge: ${isAge}`);

alert(`Name: ${nome}\nAge: ${age}\nIsAge: ${isAge}`);
