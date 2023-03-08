function calcularImovel() {
    const quartos = Number(document.getElementById('quartos').value)
    const metragem = Number(document.getElementById('metragem').value)
    const m2 = Number(document.getElementById('preco').value)
    
    var preco = 0;

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

    alert(`O imóvel com ${quartos} quartos e com a metragem de ${metragem}m² custa R$${preco},00`)

}

