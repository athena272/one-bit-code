async function asyncSum(number1, number2) {
    // return Promise.resolve(number1 + number2)
    return (number1 + number2)
}

async function asyncSubtract(number1, number2) {
    // return Promise.resolve(number1 - number2)
    return (number1 - number2)
}

Promise.all([
    asyncSum(50, 50),
    asyncSubtract(10, 10)

]).then(results => {
    console.log(results)
}).catch(err => console.error(err))