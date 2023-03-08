class Vehicle {
    move() {
        console.log('O veiculo está se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo')	
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando')
    }
}

class Aircraft extends Vehicle {

    move(speed) {
        console.log(`O avião está voando à ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const mileniumFalcom = new Aircraft()

// delorean.move()
// blackPearl.move()
// mileniumFalcom.move(80)

function start(vehicle) {
    console.log('Iniciando um veiculo')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(mileniumFalcom)