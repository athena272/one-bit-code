const Author = require('./Atuhor')

const john = new Author("John Doe")

const post = john.writePost({
    title: "titulo do post",
    body: "Lorem Ipsum do post",
})

post.addComment({
    username: "Issac Pontes",
    content: "Lorem Ipsum do comentario"
})

post.addComment({
    username: "Guilherme",
    content: "Lorem Ipsum do comentario2"
})

console.log(john)
console.log(post)