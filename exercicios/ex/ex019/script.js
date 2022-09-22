function fatorial() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('txtn').value)

    if (n >= 22) {
        window.alert('Por favor, escolha um número menor.')
    } else {
    saida.innerHTML += `<h2>Calculando ${n}</h2>`
    let c = n
    let fat = 1
    while (c > 1) {
        saida.innerHTML += `${c} x `
        fat *= c
        c--
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
    }
}

function limpar() {
    let saida = document.getElementById('saida')
    saida.innerHTML = `Preencha os dados`
}