//============================
//FIND
//==============================

//usamos o Find quando precisamos encontrar um X elemento dentro de um array
//esse valor vai ser o do primeiro elemento que satisfazer a condição pré estabelecida

const pizzas = [
    "mussarela",
    "calabresa",
    "portuguesa",
    "marguerita"
]

//startswith == começa com
const foundPizza = pizzas.find( elemento => elemento.startsWith("p"))
console.log(foundPizza)

const foundPizza2 = pizzas.find( elemento => elemento == "marguerita")
console.log(foundPizza2)
