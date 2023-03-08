import { App } from './App.js'

const app = new App()

app.createAuthor({
    name: 'J. R. R. Tolkien',
    nationality: 'British',
    biography: '...'
})

app.createAuthor({
    name: 'Rick Riordan',
    nationality: 'American',
    biography: '...'
})

const authors = app.getAuthors()

app.createBook({
    title: 'O Hobbit',
    synopsis: '...',
    genre: 'fantasy',
    pages: 300,
    author: authors[0],
    description: '...',
    price: 19.99,
    inStock: 100,
})

app.createBook({
    title: 'A Sociedade do Anel',
    synopsis: '...',
    genre: 'fantasy',
    pages: 400,
    author: authors[0],
    description: '...',
    price: 24.99,
    inStock: 100,
})

app.createBook({
    title: 'O Ladrão de Raios',
    synopsis: '...',
    genre: 'fantasy',
    pages: 500,
    author: authors[1],
    description: '...',
    price: 24.99,
    inStock: 100,
})

app.createBook({
    title: 'A Pirâmede Vermelha',
    synopsis: '...',
    genre: 'fantasy',
    pages: 600,
    author: authors[1],
    description: '...',
    price: 24.99,
    inStock: 100,
})

const books = app.getBooks()

app.createUser({
    name: 'Isaac',
    email: 'isaac@email.com',
    password: '123456'
})


const users = app.getUsers()

app.showDatabase()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]

app.createOrder({ 
    items: items,
    user: users[0]
})

app.showDatabase()