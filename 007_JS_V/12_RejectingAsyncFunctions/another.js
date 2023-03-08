const numbers = [4, 9, 5, 13, 77, null]

function asyncSquare(number) {
    if (typeof number !== 'number') {
        return Promise.reject("Argument(s) for Square must be a number")
    }

    return Promise.resolve(number * number)
}

Promise.all(
    numbers.map(number => asyncSquare(number))

).then(squareList => console.log(squareList)

).catch(err => console.log(err))

// numbers.map(number => {
//     console.log(asyncSquare(number))
// })