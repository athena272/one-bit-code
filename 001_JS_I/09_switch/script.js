function msg(lightYears, unidade, conversao) {
  alert(`Distância em Anos-luz: ${lightYears}\n${unidade}: ${conversao}`);
}

let lightYears = prompt("Informe a quantidade de anos-luz");

let choseOption = prompt("Escolha a unidade para qual deseja converter\n[1] - Parsec(pc)\n[2] - Unidade astronônimca(AU)\n[3] - Quilômetros(km)");

let unityDist;
let unity;

switch (parseInt(choseOption)) {
  case 1:
    unityDist = (lightYears * 0.306601);
    unity = "Parsec";
    break;

  case 2:
    unityDist = (lightYears * 63241.1);
    unity = "Unidade astronônimca";
    break; 

  case 3:
    unityDist = (lightYears * 9.5 * Math.pow(10, 12));
    unity = "Quilômetros";
    break; 

  default:
    unityDist = "Conversão fora do escopo";
    unity = "Unidade não identificada";
    break; 
}

msg(lightYears, unity, unityDist);