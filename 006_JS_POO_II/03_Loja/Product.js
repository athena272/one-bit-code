class Product {
    constructor({ name, description, price }) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        this.inStock += quantity
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const watch = new Product({
    name: 'Relogio de Pulo',
    price: 80,
    description: '............'
})
console.log(watch)

watch.addToStock(42)
console.log(watch)

const priceWithDiscount = watch.calculateDiscount(10)
console.log(priceWithDiscount)