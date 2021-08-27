const carros = ['fusca', 'chevette', 'opala', '147', 'polara', 'brasilia', 'corcel']

//determinar se polara existe no vetor

function temPolara(vetor){
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] === 'Polara') return true
    } 
    return false
}

function temBelina(vetor){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === 'Belina') return true
    } 
    return false
}

console.log('tem polara', PemPolara(carros))
console.log('tem Belina', temBelina(carros))

console.log('inclui Opala? ', carros.includes('Opala'))
