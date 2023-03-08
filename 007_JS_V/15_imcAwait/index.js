async function calcIMC(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject("Argument(s) must be of type number\n")
    }

    return weight / (Math.pow(height, 2))
}

async function showIMC({ weight, height }) {
    try {
        console.log(`Calculando o IMC para peso ${weight} kg e altura ${height} m ...`)

        const result = await calcIMC(weight, height)

        console.log(`O IMC da pessoa foi: ${result}`)

        if (result < 18.5) console.log('Situação: MAGREZA\n')
        else if (result < 25) console.log('Situação: NORMAL\n')
        else if (result < 30) console.log('Situação: SOBREPESO\n')
        else if (result < 40) console.log('Situação: OBESIDADE\n')
        else console.log('Situação: OBESIDADE GRAVE\n')

    } catch (error) {
        console.log(error)
    }
}

showIMC({ weight: 71, height: 1.74 })
showIMC({ weight: 48, height: 1.60 })
showIMC({ weight: 71, height: null })
showIMC({ weight: 82, height: 1.72 })
showIMC({ weight: 120, height: 1.80 })