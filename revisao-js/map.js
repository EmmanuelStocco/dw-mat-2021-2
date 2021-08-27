const frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia','morango', 'jabuticaba']

let frutas2 = []

/*
for(let i = 0; i < frutas.length; i++){
    frutas2.push(frutas[i].toUpperCase())
}
console.log(frutas)
console.log(frutas2)
*/

//Não da pra usar for no JSX, temos que usar o MAP -> produz um novo vetor a partir do vetor original, aplicando
//transformação a partir de cada um dos elementos
//recebe como argumento uma função que tem por argumento cada elemento do vetor orignial
let frutas3= frutas.map(function(elemento){
    return elemento.toUpperCase()
})
console.log(frutas3)


//formas mais comum de escrever e como arrow
let frutas4 = frutas.map(elemento=> elemento.toUpperCase())
console.log({frutas3})
const itensFrutas = frutas.map(elemento => '<li>' + elemento + '</li>')
console.log(itensFrutas)

//Obs: map sempre ira gerar um vetor de tamanho igual ao vetor original