// Aqui tiramos vantagem do Alias para manipularmos
// mais precisamente nosso array de planetas
const planets = [];
function addPlanet(name, coordinates, situation) {
    // Repare que agora o autocompletar consegue nos
    // sugerir as propriedades mesmo dentro da função
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    });
    alert(`O planeta ${name} foi salvo com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    // Utilizando o operador nullish coalescing podemos
    // garantir que nosso retorno será um tipo Union
    return planet !== null && planet !== void 0 ? planet : false;
}
// Graças ao Alias a anotação de tipos nos
// argumentos da função fica bem mais enxuta
function updateSituation(situation, planet) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} foi atualizada para "${situation}".`);
}
// Mais uma vez o Alias se mostra muito útil para encurtar
// nosso código mas mantendo as vantagens do typescript
function addSatellite(name, planet) {
    planet.satellites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`);
}
function removeSatellite(name, planet) {
    // Repare o quanto o autocompletar se torna inteligente
    // nesse caso apenas porque anotamos os tipos
    planet.satellites = planet.satellites.filter(satellite => satellite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
}
// Funções Auxiliares
function promptValidSituation() {
    let situation;
    let validSituation = false;
    situation = 'Habitado';
    while (!validSituation) {
        const situationInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado');
        switch (situationInput) {
            case '1':
                situation = 'Habitado';
                validSituation = true;
                break;
            case '2':
                situation = 'Habitável';
                validSituation = true;
                break;
            case '3':
                situation = 'Inabitável';
                validSituation = true;
                break;
            case '4':
                situation = 'Inexplorado';
                validSituation = true;
                break;
            default:
                alert('Situação inválida!');
                break;
        }
    }
    return situation;
}
// Aqui anotamos os tipos da função callback
// para facilitar a sua implementação futura
function promptValidPlanet(callback) {
    const planetName = prompt('Informe o nome do planeta:');
    if (planetName === null)
        return;
    const planet = findPlanet(planetName);
    // Aqui podemos reparar que o VS Code nos
    // avisa sobre o tipo Union de planet
    if (planet) {
        callback(planet);
    }
    else {
        alert('Planeta não encontrado! Retornando ao menu...');
    }
}
