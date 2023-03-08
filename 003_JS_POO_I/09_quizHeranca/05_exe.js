class SpacialStation {
  constructor(name, size) {
    this.name = name

    this.size = size
  }
}

class ResourceProcessor extends SpacialStation {
  constructor(name, size) {
    super(name, size)
  }

  totalLoadProcessedInaWeek() {
    let total = (this.size * 1.4) / 4
    console.log(total)
  }
}

let resouceProcessor = new ResourceProcessor('Mineradora', 120000)

resouceProcessor.totalLoadProcessedInaWeek()
