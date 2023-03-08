const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

// console.log(towns)
// console.log(...towns)
// console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()

const townsClone = [...towns]
townsClone.push('Aloha')

console.log({towns, townsCopy, townsClone})

const townsObject = { ...towns }

const townsObjectClone = { ...townsObject }

townsObjectClone.test = 'Test'
townsObjectClone['chave'] = 'Olha a chave'

console.log({townsObject, townsObjectClone})
