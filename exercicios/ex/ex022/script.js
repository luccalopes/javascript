function converter() {
let temp = Number(window.prompt('Digite um número em ºC (celsius)'))
let res = document.getElementById('res')
let escalaOrigem = temp
let conversionF = temp * 9 / 5 + 32
let conversionK = temp + 273

res.innerHTML = `A temperatura de ${temp}ºC corresponde a:`
res.innerHTML += `<p>${conversionF}ºF <strong>(Fahrenheit)</strong>`
res.innerHTML += `<p>${conversionK}ºK <strong>(Kelvin)</strong>`

}