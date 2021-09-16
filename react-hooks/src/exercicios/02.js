import * as React from 'react'

export default function Exercicio02() {
    // 💣 exclua essa declaração de variável e substitua por uma chamada a React.useState()  const name = ''  function handleChange(event) {
    // 🐨 Atualize o nome aqui usando event.target.value  }
    //const name = ''
    //o valor inicial da variavel de estado "name" sera lido do 
    //cookie caso exista. Se  n existir retorna string vazia

    //O estado inicial de uma variavel de estado é 
    //ajustado toda vez q acontece uma atualização

    //usando "lazy initializer"
    //e executado apenas umma vez na faze de inicialização
    //(mount) do componente
    //Para isso, no useState(), em vez de passarmos um valor
    //passamos uma func que retorna um valor
    const [name, setName] = React.useState(
        () => getNameCookie () || ''
    )

    const [count, setCount] = React.useState(0)

    function getNameCookie (event){
        console.log("Getting cookies")
        return localStorage.getItem("react-name")
    }

    function handleChange(event){
        setName(event.target.value)
    }

    //Esta função é chamada após qualquer atualização de componente
    //qualquer atualização do componente 
    //Aramazenar o valor da variavel de estado "nome " em um cookie (localStorage)
    React.useEffect(()=> {
        window.localStorage.setItem('react-name', name)
        setCount(count + 1)
    }, [name])

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
            <div>
                Chamadas a useEffect(): {count}
             </div>
        </div> 
       )
}