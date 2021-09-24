import * as React from 'react'

export default function Exercicio02() {
    //o valor inicial da variavel de estado name sera lido do cookie, caso exista

     //usando "lazy initializer"
    //é executado apenas uma vez na faze mount do componenten
        //para isso useState em vez de passarmos um valor
        //passsamos uma função que retorna um valor

    const [name, setName] = React.useState(
       () => getNameCookie() || ''
    )

    //variavel de estado para contar
    // de atualizaçãoes de estados
    //chamadas use
    const [count, setCount] = React.useState(0)

    function getNameCookie(){
        console.log("Getting cookie")
        return localStorage.getItem("react-name")
    }

    function handleChange(event) {
        setName(event.target.value)
    }
    //Essa função useEfect será chamada após qqr atualização do componente

    //Essa função será chamada apos qqr autorização do componente
    //local storage e do js pega o cookie (em um cookie localStorage)
    /*
      o hook useEffect() aceita dois parametros
      1 uma função q será executada como efeito colateral de uma atualização de estado
      2 um vetor de dependecias no qual devem ser especificadas as varaivels de estado
      cuja a ataulização será monitorada para a execução da função do primeiro parametor
    */

    React.useEffect(()=> {
     window.localStorage.setItem ('react-name', name)
     setCount(count + 1)
    }, [name])

    return (
        <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input onChange={handleChange} id="name" />
        </form>            
        {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
      )
    }