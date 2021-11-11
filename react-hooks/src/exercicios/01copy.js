import * as React from 'react';

export default function Exercicio1 () {

  const [name, setName] = React.useState('');
  
  function handleChange(e){
    setName(e.target.value)
     //onCHange é um evento, estamos dizendo q ao acontecer eventoOnChange chama a função handleChange
    //e logo passe o proprio evento que está chamando a função como parametro.
    //.target.value = pegue o valor desse evento
  }

    return (
      <div> 
        <form>
         <label htmlFor="name" > Eu sou a Label </label>
          <input id="name" onChange={handleChange}> Nome </input>
        </form> 
        {name ? <h1> Hello {name}</h1> : 'por favor escreva seu nome' }
      </div>
    )
}