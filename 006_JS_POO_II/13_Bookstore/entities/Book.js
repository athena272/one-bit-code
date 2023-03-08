import { Product } from "./Product.js"

export class Book extends Product {
    

    constructor({ title, synopsis, genre, pages, author, description, price, inStock = 0 }) {
        super({
            name: `Livro: ${title}`,
            description: description,
            price: price,
            inStock: inStock
        })
        this.title = title
        this.synopsis = synopsis
        this.genre = genre
        this.pages = pages
        this.author = author
    }
}