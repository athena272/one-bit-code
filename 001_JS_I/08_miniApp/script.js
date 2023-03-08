let launchDate = prompt("Informe a data de partida (formato DD/MM/YYYY)");

let date = moment(launchDate, "DD/MM/YYYY");

let today = moment();

let dateDif = today - date;

let choseOption = prompt("Escolha como gostaria de exibir o tempo de partida\n[1] - segundos\n[2] - minutos\n[3] - horas\n[4] - dias");

switch (parseInt(choseOption)) {
  case 1:
    let secondsOfLaunch = Math.round(dateDif / 1000);
    alert(`Tempo de lançamento ${secondsOfLaunch} segundo(s)`)
    break;

  case 2:
    let minutesOfLaunch = Math.round(dateDif / 1000 / 60);
    alert(`Tempo de lançamento ${minutesOfLaunch} minuto(s)`)
    break; 

  case 3:
    let hoursOfLaunch = Math.round(dateDif / 1000 / 3600);
    alert(`Tempo de lançamento ${hoursOfLaunch} hora(s)`)
    break; 

  case 4:
    let daysOfLaunch = Math.round(dateDif / 1000 / 3600 / 24);
    alert(`Tempo de lançamento ${daysOfLaunch} dia(s)`)
    break;
  
  default:
    alert("Opção inválida");
    break; 

}