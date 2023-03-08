let nameOld = prompt("Informe o nome da pessoa mais velha!");
let ageOld = prompt("Informe a idade da pessoa mais velha!");

let nameYoung = prompt("Informe o nome da pessoa mais nova");
let ageYoung = prompt("Informe a idade da pessoa mais nova");

let ageDiferenc = parseInt(ageOld) - parseInt(ageYoung);

alert(`Pessoa mais Velha {\nname: ${nameOld}\nage: ${ageOld}\n}\nPessoa mais Nova {\nname: ${nameYoung}\nage: ${ageYoung}\n}\nDiferença entre as idades: ${ageDiferenc}`);