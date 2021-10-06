//============================
//Map
//==============================

//vamos dobrar todos os numeros do array
const numbers = [1, 4, 5, 9, 14, 23]

const doubleNumbers = numbers.map((elemento)=> { return elemento * 2})
console.log(doubleNumbers)
//ele passa de elemento em elemento do vetor original retornando a mudança
// decidida em um novo vetor

//converter farnheit para celsion
const fahrenheit = [ 0, 32, 45, 50, 75, 80, 120]

const celcius = fahrenheit.map( function( elemento){
    return Math.round(( elemento - 32) * 5/9)
})

console.log(celcius)