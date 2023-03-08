export { group, a, b, c, d}
export default exportDefault

function group() {
  console.log('Export nomeado não-inline (agrupado)')
}

function a () { console.log('Hello World') }
function b () { console.log('Hoya World') }
function c () {}
function d () { console.log('Olá mundo') }

function exportDefault() {
  console.log('Export default não-inline')
}

