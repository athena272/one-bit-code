function excute() {
    // do something
    return new Promise((resolve, reject) => {
        console.log("Executed the promise")

        setTimeout(() => {
            console.log("Resolving the promise")
            resolve("It's ok to execute")
        }, 1000 * 2)
    })
}

const p = excute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 5)