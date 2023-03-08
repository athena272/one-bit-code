function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('argument must be a number')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    // console.log(sum(undefined, 9))
    console.log(sum("0", 8))
    console.log(sum(0, null))
    // console.log(sum(13, 'zero'))
} catch (error) {
    console.log('An error occurred')
    console.log(error.message)
} finally {
  console.log('Calculating finished')
}