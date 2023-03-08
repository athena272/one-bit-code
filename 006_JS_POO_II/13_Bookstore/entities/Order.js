export class Order {
    #total
    #items
    #user

    constructor({ items, user }) {
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error('Insufficient quantity in Stock')
            }
        })
        this.#items = items
        this.#user = user
        this.#total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }

    get getOrderInfo() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        }
    }
}