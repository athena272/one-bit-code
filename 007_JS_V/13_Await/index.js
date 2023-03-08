async function asyncSum(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number") {
        return Promise.reject("Argument(s) for sum must be a number")
    }

    return Promise.resolve(number1 + number2)
}

// async function execute() {
//     asyncSum(77, 33).then(result => console.log(result))
// }

async function execute() {
    try {
        const result = await asyncSum(77, null)
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}

execute()