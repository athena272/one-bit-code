// const book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Christopher Paolini",
//         age: 47,
//     },

//     addOnStock (quantity) {
//         this.inStock += quantity
//     },

//     save: () => {
//         console.log("Salvando no banco de dados")
//     }
// }

//PascalCase
function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author 
    this.published = false
    this.inStock = 0
    this.addOnStock = (quantity) => {
        this.inStock += quantity
    }
    this.end = () => {
        console.log("Encerrando programa")
    }
    
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]

const eragon = new Book("Eragon", 468, tags, author)

eragon.addOnStock(20)
console.log(eragon)

const eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)