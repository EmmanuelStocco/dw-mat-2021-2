let numeros = [10, 20,30]

let carro = {
    modelo: 'Fusca',
    marca: 'Volkswagem',
    cor: 'Preto',
    Ano: 1969
}

//desestruturação do vetor
let [a,b,c] = numeros

console.log(a,b,c)
console.log('a: ' + a)

//Desestruturando apenas o segundo valor do vetor 

let [, x, ]= numeros 
console.log('x: ' + x)

//Desestruturando os dois primeiros 

let [i, j] = numeros
console.log(`I: ${i}, j: ${s}`)


let carro = {
    modelo: 'Fusca',
    marca: 'Honda',
    cor: 'Azul',
    ano: 1993
}
//na desestruturação de objetos, as variaveis precisam ter, NECESSARIAMENTE, 
//o mesmo nome das propriedades, MAS A ORDEM NÃO IMPORTA
let { marca, modelo, ano, cor} = carro
console.log(`marca: ${marca}, modelo: ${modelo}, ano: ${ano}, cor: ${cor}`)

//Desestruturação parcial 
//let {marca, modelo} = carros