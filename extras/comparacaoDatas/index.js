function testarComparacao() {
    //Obter valores de data e converte para um objeto Date
    const experienceDataInicio = new Date(document.querySelector("#experience-dataInicio").value)
    const experienceDataFim = new Date(document.querySelector("experience-datafim").value)

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