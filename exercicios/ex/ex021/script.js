function converter() {
    let dist = Number(window.prompt('Digite uma distância em metros (m).'))
    let res = document.getElementById('res')

    let km = Math.round(dist / 100) /10
    let hm = Math.round(dist / 10) /10

    res.innerHTML = `<p>A distância de ${dist} metros corresponde a:`
    res.innerHTML += `<p>${km} quilômetros (Km)`
    res.innerHTML += `<p>${hm} hectômetros (Hm)`
    
}