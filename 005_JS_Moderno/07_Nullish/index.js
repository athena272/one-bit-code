const a = 0 //false
const b = null //false
const c = 'Teste'

const result = a || b || c
console.log(result)

const result2 = a ?? b ?? c
console.log(result2)

let value1 = 0
let value2 = value1 || 42
console.log({value1, value2})

value2 = value1 ?? 42
console.log({value1, value2}) 