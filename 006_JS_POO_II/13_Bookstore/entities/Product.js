export class Product {
   
    constructor({ name, description, price, inStock = 0 }) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addStock(quantity) {
        this.inStock += quantity
    }

    removeFromStock(quantity) {
        this.inStock -= quantity
    }
}