const Post = require('./Post')

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    writePost({ title, body }) {
        const post = new Post({
            title: title,
            body: body,
            author: this
        })

        this.posts.push(post)
        return post
    }
}

module.exports = Author