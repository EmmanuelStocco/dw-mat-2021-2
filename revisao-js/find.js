const nums = [7,8,0,2,5,4,8,2,1]

function encontrarValor(vetor){
    for(let i =0; i< vetor.length; i++){
        if(vetor[i]>0 && vetor[i]< 5) return vetor[i]
    }
}

console.log(encontrarValor(nums))
console.log(nums.find(x => x > 0 && x < 5))

//percorre todos os elementos do vetor até achar a primeira ocorrencia