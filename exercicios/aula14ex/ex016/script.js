function contar() {
    var início = document.getElementById('início')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if(início.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(início.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}