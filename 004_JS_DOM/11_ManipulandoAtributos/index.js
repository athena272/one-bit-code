const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá, mundo'

  console.log(input.value)
  // console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type === 'text' ? 'radio' : 'text'
  // input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
  input.placeholder = input.placeholder === '' ? 'Digite algo...' : ''
})

document.getElementById('disable').addEventListener('click', function () {
  input.disabled = input.disabled === false ? true : false
  // input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function () {
  const data = input.dataset.something
  // const data = input.dataset.somethingElseCamelCase
  console.log(`O valor do atributo data-something é: ${data}`)
})