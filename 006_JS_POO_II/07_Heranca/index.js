class Property {
    constructor({ area, price }) {
        this.price = price
        this.area = area
    }

    getPricePerSquereMeter() {
        return this.price / this.area
    }
}

class House extends Property { }

class Apartment extends Property {
    constructor({ number, area, price }) {
        super({ area: area, price: price })
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

const land = new Property({
    area: 200,
    price: 50000
})

const someHouse = new House({
    area: 300,
    price: 40000
})

const apt = new Apartment({
    number: "201",
    area: 100,
    price: 160000
})

console.log('====== HOUSE AND PROPERTY ======')
console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)

console.log('====== APARTMENT ======')
console.log(apt)
console.log(apt.getPricePerSquereMeter())
console.log(apt.getFloor())