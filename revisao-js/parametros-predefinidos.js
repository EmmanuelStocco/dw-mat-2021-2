function areaForma(base, altura, tipo="R"){ //tipo opcional
    let area

    switch (tipo) {
        case 'R':
            area = base * altura //retangulo
            break;
        case 'T':
            area = base * altura /2
            break
        case 'E':
            area = (base / 2) * (altura / 2) * Math.PI
            break
        default:
            area = null;
    }
    return area
}

console.log(' Area de um terreno 16m x 17m é ' + areaForma(16, 27, 'R'))