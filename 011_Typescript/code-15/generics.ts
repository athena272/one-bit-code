function first(array) {
    return array[0]
}

function last<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1]
}

const pilots = ['Luke', 'Biggs', 'Wedge', 'Han', 'Lando']

// Tipo any
const firstPilot = first(pilots)

// Tipo inferido
const lastPilot = last(pilots)