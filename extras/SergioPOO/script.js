class Property {
    constructor({ area, preco}) {
        this.preco = preco;
        this.area = area;
    }

    getPricePerSquereMeter() {
        return this.preco / this.area
    }
}

class House extends Property { }

class Apartament extends Property {
    constructor({ number, area, preco }) {
        super({ area: area, preco: preco })
        this.number = number
    }

    getFloor() {
        return this.number.slice(0, -2)
    }
}

function calcularImovel(x) {
    console.log(x)
    const apt = x[0] || x[1]
    console.log(apt)
    document.querySelector("input[name=apt]:checked").value
    const quartos = Number(document.getElementById('quartos').value)
    const metragem = Number(document.getElementById('metragem').value) 
    const m2 = Number(document.getElementById('m2').value) 

    let preco = 0;

    

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * m2 * 1.2;
            break;
        case 3:
            preco = metragem * m2 * 1.5;
            break;
        case 4:
            preco = metragem * m2 * 1.8;
            break;
        case 5:
            preco = metragem * m2 * 2.1;
            break;
    }
    return preco;
}

function calcularApartamento() {
    const quartos = Number(document.getElementById('quartos').value)
    const metragem = Number(document.getElementById('metragem').value) 
    const m2 = Number(document.getElementById('m2').value)
    const andar = Number(document.getElementById('andar').value)
    let preco = 0;

    switch (andar) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * m2 * 1.2;
            break;
        case 3:
            preco = metragem * m2 * 1.5;
            break;
        case 4:
            preco = metragem * m2 * 1.8;
            break;
        case 5:
            preco = metragem * m2 * 2.1;
            break;
        case 6:
            preco = metragem * m2 * 2.4;
            break;
    }
    return preco;
}

function lerDados() {
    const senioridade = String(document.getElementById('imovel').value)
    p1.senioridade = senioridade;
    console.log(`Valor de : ${preco}`);

}

function mostraDados() {
    document.querySelector(".mostra").innerHTML = `Valor da casa: ${senioridade}`;
}

function cadastrar() {
    lerDados();
    document.getElementById("btnCalculate").onclick = function() {
    var radios = document.getElementsByName("radioimovel");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].value === "led-zeppelin") {
            radios[i].checked = true;
        }
    }
};
    
    calcularImovel();
}