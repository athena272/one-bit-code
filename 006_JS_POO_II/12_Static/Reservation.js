class Reservation {
    constructor({ guests, room, days }) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`Base Fee is ${Reservation.baseFee}`)
    }

    static get getPremiumFee() {
        return Reservation.baseFee * 1.5
    }
    
}

Reservation.showBaseFee()
console.log(`Premium free is R$${Reservation.getPremiumFee}`)


const r1 = new Reservation({
    guests: 3,
    room: "201",
    days: 5,
})

Reservation.baseFee = 200

const r2 = new Reservation({
    guests: 2,
    room: "104",
    days: 2,
})

console.log(r1)
console.log(r2)

console.log(`Premium free is R$${Reservation.getPremiumFee}`)