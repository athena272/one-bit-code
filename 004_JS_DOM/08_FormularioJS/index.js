const form = document.getElementById('orderForm')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value

  const breadType = document.querySelector('select[name="breadType').value
  const main = document.querySelector('input[name="main"]:checked').value
  const observations = document.querySelector('textarea[name="observations"]').value

  let salad = ""
  document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
    salad += ` - ${item.value}\n`
  })
  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations,
  })
  alert(
    `Pedido realizado!!!` +
    `\nNome do cliente: ${name}` + 
    `\nEndereçoi de entrega: ${address}` + 
    `\nTipo de pão ${breadType}` + 
    `\nRecheio: \n - ${main} \n${salad}` +
    `Observações: ${observations}`
  )
})