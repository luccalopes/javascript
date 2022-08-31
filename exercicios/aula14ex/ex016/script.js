function contar () {
    var ini = document.getElementById('início')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('PASSO INVÁLIDO')
        }

        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(var c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }   res.innerHTML += `\u{1f3c1}`
    }
}










































/*function contar () {
    var ini = document.getElementById('início')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = ('Contando: ')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        var c = i
        while(c <= f) {
            res.innerHTML += `${c}`
            c++
        }


        for(var c = i; c >= f; c -= p) {
            res.style.textIndent = '2px'
            res.innerHTML += `${c}`
        }


    } 
}*/