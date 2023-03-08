const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome (n candidatos)
    textoFinal += `${indice}. `
    textoFinal += `${vaga.nome}`
    textoFinal += `(${vaga.candidatos.length} candidatos)\n`

    return textoFinal
  }, "")

  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt("Informe um nome para vaga:")
  const descricao = prompt("Informe uma descrição para a vaga:")
  const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

  const confirmarVaga = confirm(
    "Deseja criar uma vaga com essas informações?\n" +
    `Nome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`
  )

  if (confirmarVaga) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
    vagas.push(novaVaga)
    alert("Vaga criada com sucesso!")
  }

}

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
    return textoFinal + "\n - " + candidato
  }, "")

  alert(
    `Vaga nº ${indice}` +
    `\nNome: ${vaga.nome}` +
    `\nDescricao: ${vaga.descricao}` +
    `\nData Limite: ${vaga.dataLimite}` +
    `\nQuantidade de Candidatos: ${vaga.candidatos.length}}` +
    `\nCandidatos inscritos: ${candidatosEmTexto}`
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a):")
  const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
  const vaga = vagas[indice]

  const confirmacaoInscricao = confirm(
    "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacaoInscricao) {
    vaga.candidatos.push(candidato)
    alert("Inscricao na vaga realizada com sucesso!")

  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:")
  const vaga = vagas[indice]

  const confirmacaoExclusao = confirm(
    "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
  )

  if (confirmacaoExclusao) {
    vagas.splice(indice, 1)
    alert("Vaga excluida com sucesso!")
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego" +
    "\n\nEscolha uma das opções" +
    "\n1. Listar vagas disponíveis" +
    "\n2. Criar uma nova vaga" +
    "\n3. Visualizar uma vaga" +
    "\n4. Inscrever um(a) candidato(a)" +
    "\n5. Excluir uma vaga" +
    "\n6. Sair"
  )

  return opcao
}

function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()

    switch (opcao) {
      case "1":
        listarVagas()
        break
      case "2":
        novaVaga()
        break
      case "3":
        exibirVaga()
        break
      case "4":
        inscreverCandidato()
        break
      case "5":
        excluirVaga()
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida.")
    }

  } while (opcao !== "6");
}

executar()