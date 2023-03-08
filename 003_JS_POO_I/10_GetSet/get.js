class ResourceProcessStation {
  constructor(name, monthlyProcessLoad) {
    this.name = name;
    this.monthlyProcessLoad = monthlyProcessLoad;
  }

  get weeklyProcessLoad() {
    return this.monthlyProcessLoad / 4;
  }
}

let resouceProcessor = new ResourceProcessStation("Sumero", 500);
console.log(resouceProcessor.weeklyProcessLoad);

resouceProcessor.monthlyProcessLoad = 600;
console.log(resouceProcessor.weeklyProcessLoad);
