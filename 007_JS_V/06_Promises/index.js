// pendente => pending
// resolvida => resolved
// rejeitada => rejected

const p = new Promise((resolve, reject) => {
    console.log("Executed the promise")
    // resolve()
    setTimeout(() => {
        if (true) {
            reject(true)
        }

        console.log("Resolving the promise")
        resolve(true)
    }, 1000 * 3)
})

console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 5)