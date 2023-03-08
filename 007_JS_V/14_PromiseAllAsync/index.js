function waitFor(seconds) {
    return new Promise(function (resolve, reject) {
        if (typeof seconds !== 'number') {
            reject("Argument must be a number")
        }

        setTimeout(() => {
            resolve()
        }, 1000 * seconds)
    })
}

const numbers = [4, 5, 9, 13, 77]

const squares = numbers.map(async (number) => {
    await waitFor(2)
    return number * number
})

console.log(squares)

// Promise.all(squares).then(results => { 
//     console.log(results)
// })

async function execute() {
    console.time("map time: ")

    const squares = await Promise.all(numbers.map(async (number) => {
        await waitFor(2)
        return number * number
    }))

    console.log("=========EXECUTE=========")
    console.log(squares)

    console.timeEnd("map time: ")
}

execute()