const numbers = [4, 9, 5, 13, 77]

function asyncSquare(number) {
    return (number * number)
}

Promise.all(
    numbers.map(number => asyncSquare(number))

).then(squareList => console.log(squareList)

).catch(err => console.log(err))

// numbers.map(number => {
//     console.log(asyncSquare(number))
// })