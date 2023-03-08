class Person {
    #name
    #cpf
    #age

    constructor({ name, cpf, age }) {
        this.#name = name;
        this.#cpf = cpf;
        this.#age = age;
    }

    showFullObject() {
        return `{ Name: ${this.#name}, Age: ${this.#age}, CPF: ${this.#cpf} }`
    }

    get getName() {
        return this.#name
    }

    // set setName(name) {
    //     this.#name = name
    // }

    get getCPF() {
        return this.#cpf
    }

    // set setCPF(cpf) {
    //     this.#cpf = cpf
    // }

    get getAge() {
        return this.#age
    }

    // set setAge(age) {
    //     this.#age = age
    // }
}


function output() {
    // Read name
    const nome = String(document.getElementById('nome').value)
    const idade = Number(document.getElementById('idade').value)
    const cpf = String(document.getElementById('cpf').value)

    const person = new Person({
        name: nome,
        cpf: cpf,
        age: idade
    })

    console.log(`Mostre nome = ${person.getName} e o objeto ${person.showFullObject()}`)

    console.log(`Mostre idade lida = ${person.getAge} e objeto ${person.showFullObject()} `);

    console.log(`Mostre o cpf lido = ${person.getCPF} e o objeto ${person.showFullObject()}`)

    console.log(person)

    document.querySelector(".mostra").innerHTML = `Cadastrado: ${person.getName} tem CPF: ${person.getCPF} e ${person.getAge} anos`

}

function Cadastrar() {
    output()

}

function switchProperty() {
    const apartment = document.querySelector('input[id="apartamento"]')
    const fieldNumber = document.querySelector('.mostra')


    if (apartment.checked) {
        fieldNumber.style.display = 'block'
    } else {
        fieldNumber.style.display = 'none'

    }
}



