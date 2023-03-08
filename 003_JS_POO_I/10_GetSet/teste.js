class Numbers {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  set plusSet(setNumber) {
    this.x += setNumber
    return 'set: ' + (this.x + this.setNumber) // Não vai retornar isso.
  }
  get plusGet() {
    let plusGety = (this.y += 10)
    // return 'get: ' + plusGety //Vai somente retornar isso aqui. // Não pode usar parâmetros que dá erro.
    return `${this.x} and ${this.y}`;
  }
}
let twoAndFour = new Numbers(2, 4)
//SET
twoAndFour.plusSet = 10
console.log(twoAndFour)
// Ou seja, no objeto twoAndFour vai pegar o x = 2 e somar com 10, e o x vai ter esse novo valor x = 12, mas não vai retornar nada.
//GET
twoAndFour.plusGet = 100 // Não vai fazer diferença, só dar o return e alterar o valor de y.
// o get não permite parâmetro.
console.log(twoAndFour.plusGet)
console.log(twoAndFour)
