class Book {
    constructor({ title }) {
        this.title = title
        this.published = false
    }
    //method
    publish() {
        this.published = true
    }

}

const eragon = new Book({
    title: "Eragon"
})
const eldest = new Book({
    title: "Eldest"
})
eragon.publish()

console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)
console.log([eragon, eldest] instanceof Book)
console.log([eragon, eldest] instanceof Array)