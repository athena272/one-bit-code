function testarComparacao() {
    //Obter valores de data e converte para um objeto Date
    const experienceDataInicio = new Date(document.querySelector("#experience-dataInicio").value)
    const experienceDataFim = new Date(document.querySelector("#experience-datafim").value)

    const graduationDataInicio = new Date(document.querySelector("#graduation-dataInicio").value);
    const graduationDataFim = new Date(document.querySelector("#graduation-datafim").value);

    // Verificar se são válidos
    const isExperienceValid = experienceDataInicio <= experienceDataFim
    const isGraduationValid = graduationDataInicio <= graduationDataFim;

    // Exibir o resultado da comparação experiencia
    const experience = document.querySelector("#experience");
    experience.innerText = `Experiência: ${isExperienceValid ? "Válido" : "Inválido"}`
    changeColor({ isValid: isExperienceValid, element: experience })

    // Exibir o resultado da comparação graduation
    const graduation = document.querySelector("#graduation");
    graduation.innerText = `Graduação: ${isGraduationValid ? "Válido" : "Inválido"}`
    changeColor({ isValid: isGraduationValid, element: graduation })

}

function changeColor({ isValid, element }) {
    if (isValid) {
        element.classList.add('valid')
        element.classList.remove('invalid')
    } else {
        element.classList.add('invalid')
        element.classList.remove('valid')
    }
}

function getDataAtual() {
    const data = new Date();
    const mes = data.getMonth() + 1; // Obtém o mês
    const ano = data.getFullYear(); // Obtém o ano

    return new Date(ano, mes - 1);
}

const dataAtual = getDataAtual();
console.log(dataAtual); // Exemplo de saída: Mon Apr 01 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)