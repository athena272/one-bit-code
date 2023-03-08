function useLightTheme() {
  document.body.classList.add('is-light')
  document.body.classList.remove('is-dark')
  // document.body.style.backgroundColor = '#f1f5f9'
  // document.body.style.color = '#212529'
}

function useDarkTheme() {
  document.body.classList.add('is-dark')
  document.body.classList.remove('is-light')
  // document.body.style.backgroundColor = '#212529' 
  // document.body.style.color = '#f1f5f9'
}

function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')

}

const btnLightTheme = document.getElementById('lightBtn')
btnLightTheme.addEventListener('click', useLightTheme)

const btnDarkTheme = document.getElementById('darkBtn')
btnDarkTheme.addEventListener('click', useDarkTheme)

const switchBtn = document.getElementById('switchBtn')
switchBtn.addEventListener('click', switchTheme)
