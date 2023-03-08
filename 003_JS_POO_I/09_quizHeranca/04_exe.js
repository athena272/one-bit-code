// Ocorre um erro na chamada do super do construtor de ResourceProcessor

class SpacialStation {
  constructor(name, size) {
    this.name = name

    this.size = size
  }
}

class ResourceProcessor {
// Ocorre um erro na chamada do super do construtor de ResourceProcessor
  constructor(name, size) {
    super(name, size)
  }

  totalLoadProcessedInaWeek() {
    (this.size * 1.4) / 4
  }
}

let resouceProcessor = new ResourceProcessor('Mineradora', 120000)

resouceProcessor.totalLoadProcessedInaWeek()


// Ocorre um erro na chamada do super do construtor de ResourceProcessor