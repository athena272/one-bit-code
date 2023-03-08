import { Database } from "./Database.js"
import { Author } from "./entities/Author.js"
import { User } from "./entities/User.js"
import { Book } from "./entities/Book.js"
import { Order } from "./entities/Order.js"
import { Poster } from "./entities/Poster.js"  

export class App {
    static #database = new Database()

    createUser({ name, email, password }) {
        const user = new User({
            name: name,
            email: email,
            password: password
        })
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor({ name, nationality, biography }) {
        const author = new Author({
            name: name,
            nationality: nationality,
            biography: biography
        })
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook({ title, synopsis, genre, pages, author, description, price, inStock }) {
        const book = new Book({
            title: title,
            synopsis: synopsis,
            genre: genre,
            pages: pages,
            author: author,
            description: description,
            price: price,
            inStock: inStock
        })
        App.#database.saveBook(book)
    }

    addBook({ bookName, quantity }) {
        App.#database.addBooksToStock({
            bookName: bookName,
            quantity: quantity
        })
    }

    getBooks() {
        return App.#database.find('books')
    }

    createPoster({ name, description, height, width, price, inStock }) {
        const poster = new Poster({
            name: name,
            description: description,
            height: height,
            width: width,
            price: price,
            inStock: inStock
        })
    }

    addPoster({ posterName, quantity }) {
        App.#database.addPostersToStock({
            posterName: posterName,
            quantity: quantity
        })
    }

    getPosters() {
        return App.#database.find('posters')
    }

    createOrder({ items, user }) {
        const order = new Order({
            items: items,
            user: user
        })
        App.#database.saveOrder(order)
        order.getOrderInfo.items.forEach(({ product, quantity }) => {
            if (product instanceof Book) {
                App.#database.removeBooksFromStock({
                    bookName: product.name,
                    quantity: quantity
                })
            } else if (product instanceof Poster) {
                App.#database.removePostersFromStock({
                    posterName: product.name,
                    quantity: quantity
                })
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase() {
        return App.#database.showStorage()
    }


}
