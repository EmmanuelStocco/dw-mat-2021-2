//============================
//Includes
//==============================

//o includes é util quando precisa saber se um array ou objeto já tem 
//um x valor ou elemento
//ele apenas retorna true ou false
//apenas para saber se há ou  não

console.log( [1,2,3].includes( 2 ) )

//exmp2
const people = ["Adamastor", "Joana", "Mauricio", "Lalau"]
console.log(people.includes("Adamastor"))

const friends = ["Pedro", "João", "Ana"].includes("Adamastor")
console.log(friends)