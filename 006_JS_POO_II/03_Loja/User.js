class User {
    constructor({ fullname, email, password }) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login({ email, password }) {
        if (this.email === email && this.password === password) {
            console.log("Login successful")
        } else {
            console.log("Login failed")
        }
    }
}

const userTest = new User({
    fullname: "John Doe",
    email: "john.doe@gmail.com",
    password: "test123",
})

console.log(userTest)

userTest.login({
    email: "john.doe@gmail.com",
    password: "test123",
})