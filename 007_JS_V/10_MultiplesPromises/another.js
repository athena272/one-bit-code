const numbers = [4, 9, 5, 13, 77]

function asyncSquare(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number') {
            reject("Argument must be a number")
        }

        resolve(number * number)
    })
}

Promise.all(
    numbers.map(number => asyncSquare(number))

).then(squareList => console.log(squareList)

).catch(err => console.log(err))

// numbers.map(number => {
//     console.log(asyncSquare(number))
// })