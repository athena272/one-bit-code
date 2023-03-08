class Captian {
  constructor(name, age, flightHours) {
    this.name = name;
    this.age = age;
    this.flightHours = flightHours;
  }
}

class Spaceship {
  constructor(name, crewQuantity, captianName, captainAge, captainFlightHours) {
    this.name = name;
    this.crewQuantity = crewQuantity;
    this.captain = new Captian(captianName, captainAge, captainFlightHours);
  }
}

let spaceship = new Spaceship("Artemis", 13, "Will Grey", 45, 15000);

console.log(spaceship);