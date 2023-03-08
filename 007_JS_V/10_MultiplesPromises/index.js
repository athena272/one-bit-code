function asyncSum(number1, number2) {
    return new Promise((resolve, reject) => {
        if (typeof number1 !== "number" || typeof number2 !== "number") {
            reject("Argument(s) must be a number")
        } else {
            resolve(number1 + number2)
        }
    })
}

function asyncSubtract(number1, number2) {
    return new Promise((resolve, reject) => {
        if (typeof number1 !== "number" || typeof number2 !== "number") {
            reject("Argument(s) must be a number")
        } else {
            resolve(number1 - number2)
        }
    })
}

Promise.all([
    asyncSum(null, 50),
    asyncSubtract(10, 10)
    
]).then(results => {
    console.log(results)
}).catch(err => console.error(err))