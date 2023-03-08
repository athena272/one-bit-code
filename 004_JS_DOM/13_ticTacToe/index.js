const boardRegions = document.querySelectorAll('#gameBoard span')
let virtualBoard = []
let turnPlayer = ""

function updateTitle() {
  const playerInput = document.getElementById(turnPlayer)
  document.getElementById('turnPlayer').innerText = playerInput.value

}

function initializeGame() {
  // Inicializa as variáveis globais 
  virtualBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  turnPlayer = 'player1'
  // Ajusta o título da página (caso seja necessário)
  document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
  updateTitle()
  // Limpa o tabuleiro (caso seja necessário) e adiciona os eventos de clique
  boardRegions.forEach(function (element) {
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click', handleBoardClick)
  })
}

// Desabilita uma região do tabuleiro para que não seja mais clicável
function disableRegion(element) {
  element.classList.remove('cursor-pointer')
  element.removeEventListener('click', handleBoardClick)
}
// Pinta as regiões onde o jogador venceu e mostra seu nome na tela
function handleWin(regions) {
  regions.forEach(function (region) {
    document.querySelector('[data-region="' + region + '"]').classList.add('win')
  })
  const playerName = document.getElementById(turnPlayer).value
  document.querySelector('h2').innerHTML = playerName + ' venceu!'
}

function handleBoardClick(ev) {
  // Obtém os índices da região clicada
  const span = ev.currentTarget
  const region = span.dataset.region // N.N
  const rowColumnPair = region.split('.') // ["N", "N"]
  const row = rowColumnPair[0]
  const column = rowColumnPair[1]
  // Marca a região clicada com o símbolo do jogador
  if (turnPlayer === 'player1') {
    span.innerText = 'X'
    virtualBoard[row][column] = 'X'
  } else {
    span.innerText = 'O'
    virtualBoard[row][column] = 'O'
  }
  // Limpa o console e exibe nosso tabuleiro virtual
  console.clear()
  console.table(virtualBoard)
  // Desabilita a região clicada
  disableRegion(span)
  // Verifica se alguém venceu
  const winRegions = getWinRegions()
  if (winRegions.length > 0) {
    handleWin(winRegions)
  } else if (virtualBoard.flat().includes('')) {
    turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
    updateTitle()
  } else {
    document.querySelector('h2').innerHTML = 'Empate!'
  }
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  const winRegions = []
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

// Adiciona o evento no botão que inicia o jogo
document.getElementById('start').addEventListener('click', initializeGame)