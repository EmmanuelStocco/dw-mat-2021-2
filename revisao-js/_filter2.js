//============================
//Filter
//==============================

/* 
    Filter é usado quando queremos remover elementos indesejados
    quando precisamos filtrar huehue
*/
 
const nums = [2, 5, 6, 9, 14, 19, 22, 27, 31, 34, 39]
 
// Crie um novo vetor contendo apenas os números pares do vetor nums
// Usando filter():
let pares = nums.filter(elemento => elemento % 2 === 0) 
console.log(pares)