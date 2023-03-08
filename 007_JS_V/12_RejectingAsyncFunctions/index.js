async function asyncSum(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return Promise.reject("Argument(s) for sum must be a number")
    }

    return Promise.resolve(number1 + number2)
}

async function asyncSubtract(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return Promise.reject("Argument(s) for subtract must be a number")
    }

    return Promise.resolve(number1 - number2)
}

Promise.all([
    asyncSum(50, 50),
    asyncSubtract(10, 10)

]).then(results => {
    console.log(results)
}).catch(err => console.error(err))