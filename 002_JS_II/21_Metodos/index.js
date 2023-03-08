let pessoa = {
  nome: "Carlos",
  idade: 24,

  dizerOla() {
    console.log("Hoya World!!! Meu nome eh " + this.nome)
  }
}

console.log(pessoa)
pessoa.dizerOla()