import { Product } from './Product.js'

export class Poster extends Product {
    height
    width

    constructor({ name, description, height, width, price, inStock = 0 }) {
        super({
            name: name,
            description: description,
            price: price,
        })
        this.height = height
        this.width = width
    }
}