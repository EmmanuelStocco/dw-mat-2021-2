let usuario = 'Orkutilson'
let senha = 'SaudadesDoOrkut'
let nomeCompleto = 'Orkutilson Faleiros Bittar da Silva'
let idade = 19

let infoUsuario = {
    usuario: usuario,
    nome: nomeCompleto,
    senha: senha,
    idade: idade
}

let infoUsuario2 = {
    usuario,
    nome: nomeCompleto,
    senha,
    idade
}

console.log(infoUsuario2)

//exibindo variaveis em depuração -> nome da var com seu valor
console.log({idade, senha})