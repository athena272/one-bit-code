class ResourceProcessStation { 
  constructor(name, monthlyProcessLoad) {
    this.name = name;
    this.monthlyProcessLoad = monthlyProcessLoad;
  }
  static calculateProcessInHours(monthlyProcessing, hours) {
    return monthlyProcessing / 720 * hours; //um mes tem 720 horas
  }
}

// Nao precisa instanciar a classe, na verdade, nem da para usar pois esta como metodo estatico
// let total = ResourceProcessStation.calculateProcessInHours(500, 6);
// console.log(total)
let resouceProcess = new ResourceProcessStation("Sumero", 2000);
let toalProcessed = ResourceProcessStation.calculateProcessInHours(resouceProcess.monthlyProcessLoad, 10)
console.log(toalProcessed)