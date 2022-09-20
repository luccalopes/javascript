function tabuada() {
    let res = document.getElementById('res')
    let num = Number(document.getElementById('num').value)

    res.innerHTML = `<p>Calculando ${num}:`

    for (c = 1; c <= 10; c++) {
        res.innerHTML += `<p>${num} x ${c} = <strong>${(num * c)}</strong>`
    }
}