function excute() {
    // do something
    return new Promise((resolve, reject) => {
        console.log("Executed the promise")

        setTimeout(() => {
            if (false) {
                reject("Promise was rejected")
            } else {
                console.log("Resolving the promise")
                resolve("It's ok to execute")
            }

        }, 1000 * 2)
    })
}

const p = excute()

// Quando a promise é resolvida
p.then((result) => {
    console.log(`Promise solved. ${result}`)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Promise finished")
})