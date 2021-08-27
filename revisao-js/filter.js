const nums = [2, 5, 6, 9, 14, 19, 22, 27, 31, 34, 39]

//crie um novo vetor contendo apenas os numeros pares do vetor nums 

let pares = []

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0) pares.push(nums[i])
}

//Usando filter()
//ele retorna um vetor de tamanho 0 até o tamanho do vetor original

let pares2 = nums.filter(n => n % 2 === 0)

console.log({nums})
console.log({pares})
console.log({pares2})